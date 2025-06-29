import { Product } from "./products";

export function generateMailtoUrl(
  subject: string,
  body: string,
  email: string = "reefandrockjewelry@gmail.com"
): string {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
}

export function generateProductInquiryEmail(product: Product): string {
  const subject = `Order Inquiry: ${product.name}`;
  const body = `Hello,

I would like to purchase the following item:

Product Details:
- Product ID: ${product.id}
- Product Name: ${product.name}
- Description: ${product.description}
- Price: ${product.price}
- Category: ${product.category}

I would like to proceed with purchasing this item. Please let me know the next steps.

Thank you!`;

  return generateMailtoUrl(subject, body);
}

export function generateCustomOrderEmail(): string {
  const subject = "Custom Jewelry Order Request";
  const body = `Hello,

I'm interested in placing a custom jewelry order.

Custom Order Details:
- Type of jewelry (necklace, bracelet, or bangle): 
- Preferred materials (shells, stones, pearls, etc.): 
- Color preferences: 
- Budget range: 
- Size/length preferences: 
- Special requirements or inspiration: 

Please let me know if you need any additional information to create my custom piece.

Thank you!`;

  return generateMailtoUrl(subject, body);
}