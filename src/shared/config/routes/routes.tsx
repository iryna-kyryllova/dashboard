import { RouteProps } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { AboutPage } from "pages/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage";

export enum Routes {
  HOME = 'home',
  ABOUT = 'about',
  NOT_FOUND = 'notFound',
}

export const RoutesPath: Record<Routes, string> = {
  [Routes.HOME]: '/',
  [Routes.ABOUT]: '/about',
  [Routes.NOT_FOUND]: '*',
}

export const routes: Record<Routes, RouteProps> = {
  [Routes.HOME]: {
    path: RoutesPath.home,
    element: <HomePage />
  },
  [Routes.ABOUT]: {
    path: RoutesPath.about,
    element: <AboutPage />
  },
  [Routes.NOT_FOUND]: {
    path: RoutesPath.notFound,
    element: <NotFoundPage />
  }
}