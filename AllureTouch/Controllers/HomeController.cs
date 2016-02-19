using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Services.Description;
using AllureTouch.Models;
using AllureTouch.EntityFramework;
using PagedList;

namespace AllureTouch.Controllers
{
    public class HomeController : Controller
    {

        private readonly alluretouchdbEntities _entities = new alluretouchdbEntities();

        [HttpGet]
        public ActionResult Index()
        {
            ViewBag.Articles = _entities.blogposts.OrderByDescending(o => o.DatePosted).Take(3);
            return View();
        }

        [HttpGet]
        [ActionName("services-and-prices")]
        public ActionResult ServicesAndPrices()
        {
            return View();
        }

        [HttpGet]
        [ActionName("realistic")]
        public ActionResult Realistic()
        {
            return View();
        }

        [HttpGet]
        [ActionName("fashion-and-creative")]
        public ActionResult FashionAndCreative()
        {
            return View();
        }

        [HttpGet]
        [ActionName("order-form")]
        public ActionResult OrderForm()
        {
            return View();
        }

        [HttpGet]
        [ActionName("faq")]
        public ActionResult Faq()
        {
            return View();
        }

        [HttpGet]
        [ActionName("blog")]
        public ActionResult Blog(int? page)
        {
            var pageNumber = page ?? 1;

            var blogPosts = _entities.blogposts.ToList().ToPagedList(pageNumber, 6);

            ViewBag.OnePageOfBlogPosts = blogPosts;
            return View();
        }

        [HttpGet]
        [ActionName("contact-us")]
        public ActionResult ContactUs()
        {
            return View();
        }

        [HttpGet]
        [ActionName("privacy-policy")]
        public ActionResult PrivacyPolicy()
        {
            return View();
        }

        [HttpGet]
        [ActionName("terms-of-service")]
        public ActionResult TermsOfService()
        {
            return View();
        }

        public ActionResult SaveUploadedFile()
        {
            var imgFullPaths = new List<string>();

            try
            {
                foreach (string fName in Request.Files)
                {

                    HttpPostedFileBase file = Request.Files[fName];

                    if (file != null && file.ContentLength > 0)
                    {

                        //Save file content goes here
                        var fileName = file.FileName;

                        var originalDirectory = new DirectoryInfo(
                            string.Format("{0}uploaded-images\\{1}",
                                Server.MapPath(@"\"),
                                DateTime.Now.ToString("d").Replace("/", "-")
                                )
                            );

                        string pathString = Path.Combine(originalDirectory.ToString());


                        bool alreadyExist = Directory.Exists(pathString);

                        if (!alreadyExist)
                        {
                            Directory.CreateDirectory(pathString);
                        }
                            
                        var path = string.Format("{0}\\{1}", pathString, fileName);

                        int count = 1;

                        while (System.IO.File.Exists(path))
                        {
                            path = pathString + "\\" + fileName.Insert(fileName.LastIndexOf(".", StringComparison.Ordinal), "(" + count++ + ")");
                        }

                        //Save file
                        file.SaveAs(path);

                        var relativePath = path.Remove(0, path.IndexOf("uploaded-images", StringComparison.Ordinal));

                        imgFullPaths.Add(relativePath.Replace("\\", "/"));

                    }

                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return Json(new { imgPaths = imgFullPaths.ToArray() });
        }

        public ActionResult RemoveUploadedFile(string imageName)
        {
            bool success = false;

            string fullPath = Request.MapPath("~/uploaded-images/" + DateTime.Now.ToString("d").Replace("/", "-") + "/" + imageName);

            if (System.IO.File.Exists(fullPath))
            {
                System.IO.File.Delete(fullPath);
                success = true;
            }

            return Json(new {success});
        }

        public ActionResult SaveOrder(OrderModel orderModel)
        {
            orderModel.AmountOfPhotos = orderModel.Images.Count();
            foreach (var image in orderModel.Images)
            {
                if (image.EditingType == "Realistic")
                {
                    orderModel.PaymentAmount += 6.99;
                }
                else if (image.EditingType == "RealisticAndBackground")
                {
                    orderModel.PaymentAmount += 10.99;
                }
                else if (image.EditingType == "FashionOrCreative")
                {
                    orderModel.PaymentAmount += 15.99;
                }
            }

            var orderEntity = new order
            {
                AmountOfPhotos = orderModel.AmountOfPhotos,
                Email = orderModel.Email,
                FullName = orderModel.FullName,
                PaymentAmount = orderModel.PaymentAmount,
                OrderDate = DateTime.Now,
                imageeditings = orderModel.Images.ToList()
            };

            _entities.orders.Add(orderEntity);
            _entities.SaveChanges();

            foreach (var image in orderModel.Images)
            {
                _entities.imageeditings.Add(new imageediting
                {
                    ImageName = image.ImageName,
                    EditingDescription = image.EditingDescription,
                    EditingType = image.EditingType,
                    ImagePath = image.ImagePath,
                    OrderId = orderEntity.OrderId
                });
            }

            _entities.SaveChanges();

            return Json(new { Message = "bla"});
        }

    }
}