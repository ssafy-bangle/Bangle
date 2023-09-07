package com.bangle.orders;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

public class LoggerInterceptor implements HandlerInterceptor {

  @Override
  public boolean preHandle(HttpServletRequest httpServletRequest,
      HttpServletResponse httpServletResponse,
      Object handler) throws Exception {
    System.out.println("===================================");
    System.out.println("START==============================");
    System.out.println(httpServletRequest.getRequestURI());
    System.out.println("-----------------------------------");
    return HandlerInterceptor.super.preHandle(httpServletRequest, httpServletResponse, handler);
  }

  @Override
  public void postHandle(HttpServletRequest httpServletRequest,
      HttpServletResponse httpServletResponse,
      Object handler, ModelAndView modelAndView) throws Exception {
    System.out.println("-----------------------------------");
    System.out.println(httpServletRequest.getRequestURI());
    System.out.println("END================================");
    System.out.println("===================================");
    System.out.println("===================================");
    HandlerInterceptor.super
        .postHandle(httpServletRequest, httpServletResponse, handler, modelAndView);
  }
}
