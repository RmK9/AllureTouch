using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;
using AllureTouch.EntityFramework;

namespace AllureTouch.Models
{
    public class OrderModel
    {

        [DisplayName("Full Name")]
        public string FullName { get; set; }

        [DisplayName("Email")]
        public string Email { get; set; }

        public double PaymentAmount { get; set; }
        public int AmountOfPhotos { get; set; }

        public IEnumerable<imageediting> Images { get; set; }

    }
}