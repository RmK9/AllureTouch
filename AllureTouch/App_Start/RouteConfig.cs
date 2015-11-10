﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace AllureTouch
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute("SpecificRoute", "{action}/{id}",
                            new { controller = "Home", action = "Index", id = "" }
                            );

            routes.MapRoute("Default", "{controller}/{action}/{id}",
                            new { controller = "Home", action = "Index", id = "" }
                            );

        }
    }
}
