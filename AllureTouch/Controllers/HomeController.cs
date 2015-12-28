using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AllureTouch.Models;
using AllureTouch.EntityFramework;

namespace AllureTouch.Controllers
{
    public class HomeController : Controller
    {

        private readonly alluretouchdbEntities _entities = new alluretouchdbEntities();

        [HttpGet]
        public ActionResult Index()
        {
            //var p = _entities.users.First();

            var k = 1;

            return View(new IndexModel());
        }

        [HttpGet]
        [ActionName("services-and-prices")]
        public ActionResult ServicesAndPrices()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Realistic()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Fashion()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Faq()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Blog()
        {
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


    }
}