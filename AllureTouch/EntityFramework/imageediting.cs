//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AllureTouch.EntityFramework
{
    using System;
    using System.Collections.Generic;
    
    public partial class imageediting
    {
        public int ImageId { get; set; }
        public int OrderId { get; set; }
        public string ImageName { get; set; }
        public string ImagePath { get; set; }
        public string EditingType { get; set; }
        public string EditingDescription { get; set; }
    
        public virtual order order { get; set; }
    }
}