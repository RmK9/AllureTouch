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
    
    public partial class tag
    {
        public int TagId { get; set; }
        public int PostId { get; set; }
        public string Tag { get; set; }
    
        public virtual blogpost blogpost { get; set; }
    }
}
