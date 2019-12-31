﻿using Petroteks.Dal.Abstract;
using Petroteks.Dal.Concreate.EntityFramework.Contexts;
using Petroteks.Entities.Concreate;

namespace Petroteks.Dal.Concreate.EntityFramework
{
    public class EfUserDal : EfEntityRepostoryBase<User, PetroteksDbContext>, IUserDal { }
    public class EfWebsiteDal : EfEntityRepostoryBase<Website, PetroteksDbContext>, IWebsiteDal { }
    public class EfSliderObjectDal : EfEntityRepostoryBase<SliderObject, PetroteksDbContext>, ISliderObjectDal { }
    public class EfAboutUsObjectDal : EfEntityRepostoryBase<AboutUsObject, PetroteksDbContext>, IAboutUsObjectDal { }
    public class EfPrivacyPolicyObjectDal : EfEntityRepostoryBase<PrivacyPolicyObject, PetroteksDbContext>, IPrivacyPolicyObjectDal { }
    public class EfCategoryDal : EfEntityRepostoryBase<Category, PetroteksDbContext>, ICategoryDal { }
    public class EfProductDal : EfEntityRepostoryBase<Product, PetroteksDbContext>, IProductDal { }
    public class EfMainPageDal : EfEntityRepostoryBase<MainPage, PetroteksDbContext>, IMainPageDal { }
}
