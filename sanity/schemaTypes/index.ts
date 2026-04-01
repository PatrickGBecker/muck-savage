import member from "./member";
import show from "./show";
import { homePage, siteSettings } from "./homePage";

export const schema = {
  types: [member, show, homePage, siteSettings],
};