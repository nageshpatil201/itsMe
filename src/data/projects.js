import grabky1 from '../assets/grabky1.png'
import grabky2 from '../assets/grabky2.png'
import grabky3 from '../assets/grabky3.png'
import warehouse3 from '../assets/portal3.png'
import warehouse4 from '../assets/portal4.png'
import warehouse6 from '../assets/portal6.png'
import cp1 from '../assets/cp1.png'
import cp2 from '../assets/cp2.png'
import cp3 from '../assets/cp3.png'
import vfs1 from '../assets/vfs1.png'
import vfs2 from '../assets/vfs2.png'
import vfs3 from '../assets/vfs3.png'


export const projects1 = [
  {
    name: 'Grabky Salon [Grabky]',
    description:
      'Hair salon booking platform using React Native + Node.js microservices with Kafka eventing, JWT/OAuth auth, WebSockets, Razorpay payments, Twilio messaging, and AI-powered review responses.',
    stack: ['React Native', 'Node.js', 'Kafka', 'MongoDB', 'WebSockets', 'Razorpay', 'Twilio', 'AWS'],
    impact: 'Ongoing build for high-volume salon booking across India',
    images: [
      { src: grabky1, alt: 'Grabky booking flow preview' },
      { src: grabky2, alt: 'Grabky salon detail screen' },
      { src: grabky3, alt: 'Grabky dashboard preview' }
    ],
    link: 'https://github.com/nageshpatil201' // placeholder repo
  },
  {
    name: 'Warehouse Portal [Snapbizz]',
    description:
      'Inventory Management Portal for retailers to manage sales and transactions and increase produtivity , interconnected with TURBO & POS devices',
    stack: ['Vue js', 'Node.js',"Spring Boot", 'Kafka', 'MongoDB','Postgres','Gupshup', 'AWS','DigitalOcean'],
    impact: 'Handling more than 30 thousand stores Inventory and Transactions.',
    images: [
      { src: warehouse3, alt: 'Warehouse dashboard preview' },
      { src: warehouse4, alt: 'Warehouse inventory management' },
      { src: warehouse6, alt: 'Warehouse shipment management' }
    ],
    link: 'https://github.com/nageshpatil201' // placeholder repo
  }
]

export const projects2 = [
  {
    name: 'Central Portal [AXIS BANK]',
    description:
      'Central portal for AXIS BANK Based POS devices to manage inventory , sales , payment transactions',
    stack: ['React Native', 'Node.js', 'Kafka', 'MongoDB', 'WebSockets', 'Razorpay', 'Twilio', 'AWS'],
    impact: 'Huge impact on small merchants for sales and billings',
    images: [
      { src: cp1, alt: 'Grabky booking flow preview' },
      { src: cp2, alt: 'Grabky salon detail screen' },
      { src: cp3, alt: 'Grabky dashboard preview' }
    ],
    link: 'https://github.com/nageshpatil201' // placeholder repo
  },
  {
    name: 'VFS Global Portal [VFS Global]',
    description:      'Portal for VFS Global to manage and track applicants transactions and visa applications',
    stack: ['React Native', 'Node.js', 'Kafka', 'MongoDB', 'WebSockets', 'Razorpay', 'Twilio', 'AWS'],
    impact: 'Managing VFS transactions and applications across India',
    images: [
      { src: vfs3, alt: 'Warehouse dashboard preview' },
      { src: vfs2, alt: 'Warehouse inventory management' },
      { src: vfs1, alt: 'Warehouse shipment management' }
    ],
    link: 'https://github.com/nageshpatil201' // placeholder repo
  }
]

