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
    
    public partial class blogpost
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public blogpost()
        {
            this.tags = new HashSet<tag>();
        }
    
        public int PostId { get; set; }
        public string Title { get; set; }
        public byte[] Content { get; set; }
        public string MainImage { get; set; }
        public DateTime DatePosted { get; set; }
        public string UrlTitle { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tag> tags { get; set; }
    }
}
