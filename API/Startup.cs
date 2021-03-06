using DataLibrary.Db;
using DataLibrary.Repository;
using Core;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using DataLibrary.SortFilter;

namespace API
{
    public class Startup
    {
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton(new ConnectionStringData
            {
                SqlConnectionName = "Default"
            });

            services.AddSingleton<IDataAccess, SqlDbUsingQuery>();
            services.AddSingleton<IUsersRepo, UsersRepoQuery>();
            services.AddSingleton<ICalculationsRepo, CalculationsRepoQuery>();
            services.AddSingleton<ISortAndFilter, SortAndFilterDbReturn>();
            services.AddScoped<ICalculator, Calculator>();
            services.AddControllersWithViews();

            //services.AddCors(opt =>
            //{
            //    opt.AddDefaultPolicy(policy =>
            //    {
            //        policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
            //    });
            //});
            services.AddSpaStaticFiles(config =>
                config.RootPath = "Client/dist");
            //services.AddSwaggerGen(c =>
            //{
            //    c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
            //});
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseDeveloperExceptionPage();

            //app.UseSwagger();

            //app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1"));

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            //app.UseAuthorization();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();

            //app.UseCors();

            app.UseEndpoints(endpoints =>
            {
                //endpoints.MapControllers();
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "Client";
                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer("start");
                }
            });
        }
    }
}