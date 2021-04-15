interface IAddress {
  line1: string;
  line2: string;
  line3: string;
  state: string;
  country: string;
}
interface ISiteConfig {
  adminEmail: string;
  contactEmail: string;
  phone: string;
  whatsAppNo: string;
  address: IAddress;
}
const SiteConfig: ISiteConfig = {
  adminEmail: "admin@akruticonsulting.com",
  contactEmail: "info@akruticonsulting.com",
  phone: "+44 7949207064",
  whatsAppNo: "+44 7949207064",
  address: {
    line1: "Akruti Consulting Ltd.",
    line2: "5 Kings Reach",
    line3: "BerkShire",
    state: "Slough",
    country: "United Kingdom",
  },
};
export default SiteConfig;
