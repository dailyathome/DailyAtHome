using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DailyAtHome.API.ViewModels
{
    public class DAHResponse
    {
        public int StatusCode { get; set; }
        public string Message { get; set; }
    }
}