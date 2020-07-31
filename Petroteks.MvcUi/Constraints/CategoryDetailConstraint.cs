﻿namespace Petroteks.MvcUi.Constraints
{
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Routing;
    using Petroteks.Bll.Concreate;
    using Petroteks.MvcUi.Models;
    public class CategoryDetailConstraint : IRouteConstraint
    {
        private readonly IRouteTable routeTable;

        public CategoryDetailConstraint(IRouteTable routeTable)
        {
            this.routeTable = routeTable;
        }
        public bool Match(HttpContext httpContext, IRouter route, string routeKey, RouteValueDictionary values, RouteDirection routeDirection)
        {
            return routeTable.Exists(values[routeKey].ToString(), EntityName.Category, PageType.Detail);
        }
    }
}
