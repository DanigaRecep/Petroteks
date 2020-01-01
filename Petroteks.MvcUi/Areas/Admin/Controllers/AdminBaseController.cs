﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Petroteks.Bll.Abstract;
using Petroteks.Entities.Concreate;
using Petroteks.MvcUi.Controllers;
using Petroteks.MvcUi.Services;

namespace Petroteks.MvcUi.Areas.Admin.Controllers
{
    public class AdminBaseController : GlobalController
    {
        private readonly IUserSessionService userSessionService;

        public AdminBaseController(IUserSessionService userSessionService,IWebsiteService websiteService, IHttpContextAccessor httpContextAccessor) : base(websiteService, httpContextAccessor)
        {
            this.userSessionService = userSessionService;
        }

        public override void OnActionExecuted(ActionExecutedContext context)
        {
            ViewBag.LoginUser = userSessionService.Get("LoginAdmin");
            base.OnActionExecuted(context);
        }
    }
}