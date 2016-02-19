using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AllureTouch.EntityFramework;

namespace AllureTouch.Controllers
{
    public class BlogController : Controller
    {

        private readonly alluretouchdbEntities _entities = new alluretouchdbEntities();

        [HttpGet]
        [ActionName("blog-post")]
        public ActionResult BlogPost(string title)
        {

            if (string.IsNullOrEmpty(title)) return View(_entities.blogposts.First());

            try
            {
                var blogPosts = _entities.blogposts.ToList().OrderByDescending(k => k.DatePosted);
                var model = blogPosts.Where(m => m.UrlTitle.ToLower() == title.ToLower()).ToList().First();
                ViewBag.BlogPosts = blogPosts.Take(10);

                return View(model);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return View(new blogpost());
            }
            
        }

    }
}