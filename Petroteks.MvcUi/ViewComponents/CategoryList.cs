﻿using Microsoft.AspNetCore.Mvc;
using Petroteks.Bll.Abstract;
using Petroteks.Entities.Concreate;
using Petroteks.MvcUi.Models;
using Petroteks.MvcUi.Models.MI;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Petroteks.MvcUi.ViewComponents
{
    public class CategoryList : ViewComponent
    {
        private readonly ICategoryService categoryService;
        private readonly IProductService productService;

        public CategoryList(ICategoryService categoryService, IProductService productService)
        {
            this.categoryService = categoryService;
            this.productService = productService;
        }


        public async Task<IViewComponentResult> InvokeAsync(Website website)
        {
            ICollection<MI_Category> categories = categoryService
                .GetMany(category => category.WebSiteid == website.id && category.IsActive == true, CurrentLanguage.id)//??
                .OrderByDescending(x => x.Priority)
                .Select(x => new MI_Category(x))
                .ToList();

            ICollection<MI_Product> products = productService
                .GetMany(x => x.IsActive == true, CurrentLanguage.id)
                .Select(x => new MI_Product(x))
                .OrderByDescending(x => x.Priority)
                .ToList();

            return View(new CategoryListViewModel(categoryService, productService)
            {
                MainCategories = categories.Where(x => x.Parentid == 0).ToList(),
                AllSubCategory = categories.Where(x => x.Parentid != 0).ToList(),
                AllProduct = products
            });
        }
    }
}
