const footerLinks = [
  {
    name: 'Company Info',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Carrier', href: '#' },
      { name: 'We are hiring', href: '#' },
      { name: 'Blog', href: '#' },
    ],
  },
  {
    name: 'Legal',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Carrier', href: '#' },
      { name: 'We are hiring', href: '#' },
      { name: 'Blog', href: '#' },
    ],
  },
  {
    name: 'Features',
    links: [
      { name: 'Business Marketing', href: '#' },
      { name: 'User Analytic', href: '#' },
      { name: 'Live Chat', href: '#' },
      { name: 'Unlimited Support', href: '#' },
    ],
  },
  {
    name: 'Resources',
    links: [
      { name: 'IOS & Android', href: '#' },
      { name: 'Watch a Demo', href: '#' },
      { name: 'Customers', href: '#' },
      { name: 'API', href: '#' },
    ],
  },
  
];
function FooterBottom() {
  return (
    <div className="bottom-footer-list">
      {footerLinks.map((category) => (
        <div key={category.name} className="footer-category">
          <h3 className="bottom-footer-header">{category.name}</h3>
          <ul className="footer-links">
            {category.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="fotter-functions">

          <input className="footer-placeholder" type="text" placeholder="your email" />
          <button className="footer-button">Subscribe</button>
       
      </div>
      <input type="text" placeholder="Lore imp sum dolor Amit" />
    </div>
  );
}

export default FooterBottom;