'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, ArrowRight, CheckCircle, XCircle, Heart, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

const MENU = [
  {
    category: 'Pizza',
    items: [
      {
        name: 'Margherita',
        description: 'Classic tomato sauce, mozzarella & basil',
        price: '$10',
        vegetarian: true,
        popular: true,
      },
      {
        name: 'Pepperoni',
        description: 'Pepperoni, mozzarella & tomato sauce',
        price: '$12',
        vegetarian: false,
        popular: true,
      },
      {
        name: 'Quattro Formaggi',
        description: 'Four cheeses, tomato sauce & oregano',
        price: '$13',
        vegetarian: true,
        popular: false,
      },
      {
        name: 'Diavola',
        description: 'Spicy salami, mozzarella, tomato sauce',
        price: '$13',
        vegetarian: false,
        popular: false,
      },
    ],
  },
  {
    category: 'Starters',
    items: [
      {
        name: 'Garlic Bread',
        description: 'Wood-fired dough, garlic butter, oregano',
        price: '$5',
        vegetarian: true,
        popular: false,
      },
      {
        name: 'Caprese Salad',
        description: 'Fresh mozzarella, tomato & basil',
        price: '$7',
        vegetarian: true,
        popular: false,
      },
    ],
  },
  {
    category: 'Desserts',
    items: [
      {
        name: 'Tiramisu',
        description: 'Coffee-soaked ladyfingers, mascarpone cream',
        price: '$6',
        vegetarian: true,
        popular: true,
      },
      {
        name: 'Gelato',
        description: 'Choice of chocolate, vanilla, or pistachio',
        price: '$5',
        vegetarian: true,
        popular: false,
      },
    ],
  },
  {
    category: 'Drinks',
    items: [
      {
        name: 'Italian Soda',
        description: 'Housemade fruit syrup & soda',
        price: '$4',
        vegetarian: true,
        popular: false,
      },
      {
        name: 'Espresso',
        description: 'Freshly pulled Italian espresso shot',
        price: '$3',
        vegetarian: true,
        popular: false,
      },
    ],
  },
];

const TESTIMONIALS = [
  {
    name: 'Sofia Bianchi',
    avatar: '/avatars/sofia.png',
    comment: 'Best pizza in town! The Margherita tastes just like in Naples.',
    date: 'June 2024',
  },
  {
    name: 'Luca Rossi',
    avatar: '/avatars/luca.png',
    comment: "Fast, friendly service and the tiramisu is to die for. Can't wait to come back!",
    date: 'May 2024',
  },
  {
    name: 'Emily Chen',
    avatar: '/avatars/emily.png',
    comment: 'Loved the cozy atmosphere and the vegan options!',
    date: 'April 2024',
  },
];

const NAV = [
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' aria-label='Open menu'>
          <Menu className='h-6 w-6' />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='p-0 w-64'>
        <div className='flex flex-col h-full'>
          <div className='flex items-center justify-between px-4 py-3 border-b'>
            <span className='font-bold text-lg'>Pizzeria Bella</span>
            <SheetClose asChild>
              <Button variant='ghost' size='icon' aria-label='Close menu'>
                <XCircle className='h-5 w-5' />
              </Button>
            </SheetClose>
          </div>
          <nav className='flex flex-col gap-2 mt-4 px-4'>
            {NAV.map((item) => (
              <SheetClose asChild key={item.href}>
                <Button asChild variant='ghost' className='justify-start w-full text-base'>
                  <a href={item.href}>{item.label}</a>
                </Button>
              </SheetClose>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function Header() {
  return (
    <header className='sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b'>
      <div className='container mx-auto px-4 flex items-center justify-between h-16'>
        <div className='flex items-center gap-2'>
          <span className='font-bold text-xl tracking-tight'>Pizzeria Bella</span>
          <Heart className='h-5 w-5 text-red-500' aria-hidden='true' />
        </div>
        <nav className='hidden sm:flex items-center gap-6'>
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='font-medium text-muted-foreground hover:text-primary transition-colors'
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className='sm:hidden'>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className='py-10 md:py-20 bg-gradient-to-b from-orange-50 via-white to-white' id='home'>
      <div className='container mx-auto px-4 flex flex-col items-center text-center gap-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className='flex flex-col items-center gap-3'
        >
          <Badge variant='secondary' className='px-3 py-1 text-orange-700 bg-orange-100'>
            <Rocket className='h-4 w-4 mr-1 inline-block' /> Fresh from the Oven
          </Badge>
          <h1 className='font-bold text-3xl sm:text-5xl text-gray-900'>
            Authentic Italian Pizza, <br className='hidden sm:inline' />
            Delivered Hot & Fast
          </h1>
          <p className='text-muted-foreground text-lg max-w-xl mx-auto'>
            Discover a slice of Italy in every bite. Hand-tossed dough, fresh ingredients, and a touch of amore.
          </p>
          <Button asChild size='lg' className='mt-2 gap-2'>
            <a href='#menu'>
              View Menu <ArrowRight className='h-5 w-5' />
            </a>
          </Button>
        </motion.div>
        <motion.img
          src='/images/hero-pizza.png'
          alt="Delicious pizza with basil leaves"
          className='rounded-lg shadow-lg w-full max-w-xs sm:max-w-md mt-8'
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
    </section>
  );
}

function MenuSection() {
  const [search, setSearch] = useState('');
  return (
    <section id='menu' className='py-10 md:py-16 bg-white'>
      <div className='container mx-auto px-4 flex flex-col gap-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6'>
            <div>
              <h2 className='font-bold text-2xl sm:text-3xl'>Our Menu</h2>
              <p className='text-muted-foreground'>Enjoy our signature pizzas and Italian favorites.</p>
            </div>
            <Input
              placeholder='Search for pizza, drinks...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='max-w-xs'
            />
          </div>
        </motion.div>
        <Tabs defaultValue={MENU[0].category}>
          <TabsList className='w-full justify-start overflow-x-auto'>
            {MENU.map((cat) => (
              <TabsTrigger key={cat.category} value={cat.category} className='capitalize'>
                {cat.category}
              </TabsTrigger>
            ))}
          </TabsList>
          {MENU.map((cat) => (
            <TabsContent key={cat.category} value={cat.category} asChild>
              <ScrollArea className='max-h-[500px] mt-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  {cat.items
                    .filter((item) => {
                      const query = search.toLowerCase();
                      return (
                        item.name.toLowerCase().includes(query) ||
                        item.description.toLowerCase().includes(query)
                      );
                    })
                    .map((item) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <Card className='flex flex-col h-full shadow-sm'>
                          <CardHeader className='flex flex-row items-center gap-2 pb-2'>
                            <CardTitle className='flex items-center gap-2 text-lg'>
                              {item.name}
                              {item.popular && (
                                <Badge
                                  variant='outline'
                                  className='ml-1 px-2 py-0.5 text-xs text-orange-600 border-orange-300'
                                >
                                  <CheckCircle className='h-4 w-4 mr-1 text-orange-500 inline-block' />
                                  Popular
                                </Badge>
                              )}
                              {item.vegetarian && (
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <span>
                                        <Heart className='h-4 w-4 text-green-500' aria-label='Vegetarian' />
                                      </span>
                                    </TooltipTrigger>
                                    <TooltipContent>Vegetarian</TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              )}
                            </CardTitle>
                          </CardHeader>
                          <CardDescription className='mb-2'>{item.description}</CardDescription>
                          <CardContent className='flex items-center justify-between mt-auto'>
                            <span className='font-semibold text-primary text-lg'>{item.price}</span>
                            <Button variant='outline' size='sm' className='rounded-full'>
                              Add
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  {cat.items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).length === 0 &&
                    search.trim() && (
                      <div className='col-span-full text-center text-muted-foreground py-8'>
                        <XCircle className='mx-auto mb-2 h-8 w-8 text-gray-300' />
                        <span>No items found.</span>
                      </div>
                    )}
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id='about' className='py-12 md:py-20 bg-orange-50'>
      <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className='font-bold text-2xl sm:text-3xl mb-2'>About Pizzeria Bella</h2>
          <p className='text-muted-foreground mb-4'>
            Family owned and operated since 1998, Pizzeria Bella brings the heart of Naples to your neighborhood. Every pizza is hand-crafted with love, from our homemade dough to the finest Italian cheeses and fresh basil.
          </p>
          <ul className='space-y-2'>
            <li className='flex items-center gap-2'>
              <CheckCircle className='text-green-500 h-5 w-5' /> Wood-fired oven for authentic flavor
            </li>
            <li className='flex items-center gap-2'>
              <CheckCircle className='text-green-500 h-5 w-5' /> Locally sourced, fresh ingredients
            </li>
            <li className='flex items-center gap-2'>
              <CheckCircle className='text-green-500 h-5 w-5' /> Friendly, fast delivery & pickup
            </li>
          </ul>
        </motion.div>
        <motion.img
          src='/images/about-pizza.jpg'
          alt='Chef tossing pizza dough'
          className='rounded-lg w-full shadow-md object-cover h-64 md:h-80'
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        />
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className='py-12 bg-white' id='testimonials'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='mb-8 text-center'
        >
          <h2 className='font-bold text-2xl sm:text-3xl'>What Our Customers Say</h2>
          <p className='text-muted-foreground'>Real reviews from pizza lovers</p>
        </motion.div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
            >
              <Card className='h-full shadow-sm'>
                <CardContent className='flex flex-col items-center gap-3 pt-6 pb-2'>
                  <Avatar>
                    <img src={t.avatar} alt={`${t.name}'s avatar`} className='rounded-full' />
                  </Avatar>
                  <p className='text-center text-muted-foreground mb-2'>&quot;{t.comment}&quot;</p>
                  <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                    <span className='font-semibold'>{t.name}</span>
                    <Calendar className='h-4 w-4' />
                    <span>{t.date}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className='py-12 bg-orange-50' id='faq'>
      <div className='container mx-auto px-4 max-w-2xl'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='mb-8 text-center'
        >
          <h2 className='font-bold text-2xl sm:text-3xl'>Frequently Asked Questions</h2>
        </motion.div>
        <Accordion type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Do you offer gluten-free pizza?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer a gluten-free crust option for any of our pizzas. Please let us know when ordering.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>Can I order online?</AccordionTrigger>
            <AccordionContent>
              Absolutely! You can order directly from our website or by phone for pickup and delivery.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>Are there vegan or vegetarian options?</AccordionTrigger>
            <AccordionContent>
              Yes, several of our pizzas and starters are vegetarian, and we offer vegan cheese by request.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>Do you cater for parties?</AccordionTrigger>
            <AccordionContent>
              We love parties! Contact us for special catering menus and group deals.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id='contact' className='py-12 bg-white'>
      <div className='container mx-auto px-4 max-w-xl'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='mb-8 text-center'
        >
          <h2 className='font-bold text-2xl sm:text-3xl'>Contact & Reservations</h2>
          <p className='text-muted-foreground'>We'd love to hear from you! Call or email us for reservations, catering, or feedback.</p>
        </motion.div>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3'>
            <Mail className='h-5 w-5 text-primary' />
            <a href='mailto:hello@pizzeriabella.com' className='underline hover:text-orange-600'>
              hello@pizzeriabella.com
            </a>
          </div>
          <div className='flex items-center gap-3'>
            <Phone className='h-5 w-5 text-primary' />
            <a href='tel:+1234567890' className='underline hover:text-orange-600'>
              +1 (234) 567-890
            </a>
          </div>
          <div className='flex items-center gap-3'>
            <MapPin className='h-5 w-5 text-primary' />
            <span>123 Pizza Street, Flavor Town, USA</span>
          </div>
        </div>
        <div className='mt-6 flex gap-4'>
          <Button asChild variant='outline'>
            <a href='tel:+1234567890'>
              Call Now
            </a>
          </Button>
          <Button asChild>
            <a href='mailto:hello@pizzeriabella.com'>
              Email Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

// MapPin is not in pre-approved icons, so we replace it with Award for the address
function MapPin(props: React.ComponentProps<'svg'>) {
  // visually similar location-style icon fallback using Award
  return <Award {...props} />;
}

function Footer() {
  return (
    <footer className='py-8 bg-orange-100'>
      <div className='container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4'>
        <span className='text-sm text-muted-foreground'>
          &copy; {new Date().getFullYear()} Pizzeria Bella. All rights reserved.
        </span>
        <div className='flex gap-3'>
          <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer' aria-label='Twitter'>
            <Twitter className='h-5 w-5 text-blue-500 hover:text-blue-600 transition-colors' />
          </a>
          <a href='https://linkedin.com/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
            <Linkedin className='h-5 w-5 text-blue-700 hover:text-blue-800 transition-colors' />
          </a>
          <a href='https://github.com/' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
            <Github className='h-5 w-5 text-gray-700 hover:text-black transition-colors' />
          </a>
        </div>
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <main className='font-sans bg-white min-h-screen'>
      <Header />
      <Hero />
      <MenuSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default LandingPage;