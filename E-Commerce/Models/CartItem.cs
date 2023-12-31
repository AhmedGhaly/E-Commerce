﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace MVC_Project.Models
{
    public class CartItem
    {

        [Required]
        [ForeignKey("Product")]
        public int ProductId { get; set; }

        public virtual Product? Product { get; set; }

        [Required]
        [ForeignKey("Cart")]
        public int CartId { get; set; }

        public virtual Cart? Cart { get; set; }

        public int Quantity { get; set; }

        [Required]
        [Column(TypeName = "money")] 
        public decimal Price { get; set; }
    }
}
