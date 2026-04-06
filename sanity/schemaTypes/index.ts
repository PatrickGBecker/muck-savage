import member from "./member";
import show from "./show";
import { homePage, siteSettings } from "./homePage";
import galleryImage from "./galleryImage";

export const schema = {
  types: [member, show, homePage, siteSettings, galleryImage],
};
