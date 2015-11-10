using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AllureTouch.Models;

namespace AllureTouch.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
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

    }
}