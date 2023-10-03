﻿using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using static System.Net.Mime.MediaTypeNames;

namespace MVC_Project.Models
{


public class Product
    {
        public Product()
        {

            Images = new List<ProductImage>();
            Reviews = new List<Review>();
        }
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(255)]
        public string Name { get; set; }

        [MaxLength(255)]
        public string Brand { get; set; }

        [MaxLength(1000)]
        public string Description { get; set; }

        [Required]
        [Column(TypeName = "money")]
        public decimal Price { get; set; }

        [Required]
        public int StockQuantity { get; set; }

        public int BuyCounter { get; set; }

        public int CategoryId { get; set; }

        [ForeignKey("CategoryId")]
        public virtual Category? Category { get; set; }
        public virtual ICollection<ProductImage>? Images { get; set; }
        public virtual Favorite? Favorite { get; set; }
        public virtual ICollection<Review>? Reviews { get; set; }
        public virtual  CartItem? CartItem { get; set; }


    }



}
