const EXTERNAL_ROUTES = () => '';

EXTERNAL_ROUTES.email = (email: string) => `mailto:${email}`;
EXTERNAL_ROUTES.phone = (phone: string) => `tel:${phone}`;

EXTERNAL_ROUTES.googleMaps = (text: string) =>
  `https://google.com/maps/search/?api=1&query=${text}`;

export default EXTERNAL_ROUTES;
