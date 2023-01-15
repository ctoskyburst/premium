<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function welcome()
    {
        // home page hero section
        $heroData = [
            'title' => 'We are a Global UI UX',
            'goldTitle' => 'design Studio',
            // 'text' => 'We help you deliver growth-driven experiences to your users.',
            'text' => 'At our company, we specialize in creating growth-focused user experiences that drive results for your business.',
            'image' => '/images/hero-img.png',
        ];

        // services Design section
        $designServiceData = [
            'UX and UI',
            'Design Strategy',
            'UX for Start-up',
            'Website UX',
            'Enterprise Software UX',
            'App/Wearable UX',
        ];

        // services Development section

        $developmentService = [
            'Website',
            'Mobile App',
            'CMS',
            'Enterprise Software',
            'PWA',
            'CRM',
        ];

        // testimonials
        $testimonials = [
            [
                'image' => 'https://ui-avatars.com/api/?size=128',
                'name' => 'john doe',
                'designation' => 'web development',
                'stars' => 4,
                'text' => 'Working with Ungrammary never felt like outsourcing or a services engagement work. It felt like working with true artists with great passion for doing their best work by pushing to their limits.',
            ],
            [
                'image' => 'https://ui-avatars.com/api/?size=128',
                'name' => 'john doe',
                'designation' => 'web development',
                'stars' => 4,
                'text' => 'Working with Ungrammary never felt like outsourcing or a services engagement work. It felt like working with true artists with great passion for doing their best work by pushing to their limits.',
            ],
            [
                'image' => 'https://ui-avatars.com/api/?size=128',
                'name' => 'john doe',
                'designation' => 'web development',
                'stars' => 4,
                'text' => 'Working with Ungrammary never felt like outsourcing or a services engagement work. It felt like working with true artists with great passion for doing their best work by pushing to their limits.',
            ],
            [
                'image' => 'https://ui-avatars.com/api/?size=128',
                'name' => 'john doe',
                'designation' => 'web development',
                'stars' => 4,
                'text' => 'Working with Ungrammary never felt like outsourcing or a services engagement work. It felt like working with true artists with great passion for doing their best work by pushing to their limits.',
            ],
        ];

        // $chooseUsData = [
        //     [
        //         'title' => 'communicate',
        //         'text' => 'Effective communication is essential to project success. We always keep you informed about the status.',
        //     ],
        //     [
        //         'title' => 'research',
        //         'text' => 'Research is something we value first in our UX process as it helps us to understand your user.',
        //     ],
        //     [
        //         'title' => 'evaluate',
        //         'text' => 'Evaluation of the design gives you the ability to reconsider the goal and make changes according to the results',
        //     ],
        // ];

        $chooseUsData = [
            [
                'title' => 'communicate',
                'text' => 'Clear and consistent communication is crucial for the success of any project. We make sure to keep you updated on the progress every step of the way.',
            ],
            [
                'title' => 'research',
                'text' => 'In our UX process, thorough research is of utmost importance as it helps us gain insights into your target users and their needs.',
            ],
            [
                'title' => 'evaluate',
                'text' => 'By evaluating the design, you have the opportunity to reassess your goals and make adjustments based on the results.',
            ],
        ];

        return Inertia::render('Welcome', compact('heroData', 'designServiceData', 'developmentService', 'testimonials', 'chooseUsData'));
    }

    public function services()
    {
        // hero section
        $heroData = [
            'title' => 'Our role is to imagine products that don’t exist and',
            'goldTitle' => 'guide them to life',
            'image' => '/images/service-hero-img.png',
        ];

        // services Design section
        $designServiceData = [
            [
                'title' => 'User Experience (UX)',
                'text' => 'By enhancing the functionality, ease of use, and enjoyment of interacting with a product, we aim to increase customer satisfaction and loyalty.',
            ],
            [
                'title' => 'UX for startup',
                'text' => 'High-quality UX design can help startup companies build a base of satisfied and loyal customers who will spread the word about your product.',
            ],
            [
                'title' => 'User Interface (UI)',
                'text' => 'Our designs focus on creating a seamless interaction between the user and the app or machine through visually striking elements, clean aesthetics, and responsive design.',
            ],
            [
                'title' => 'Enterprise Software UX',
                'text' => 'Effective enterprise UX design relies on the adoption of a user-centric UX strategy by the entire organization.',
            ],
            [
                'title' => 'Design Strategy',
                'text' => 'Having a solid design strategy ensures that every design asset is created with the specific goals and objectives of the business in mind.',
            ],
            [
                'title' => 'App / Wearable UX',
                'text' => 'Our goal is to craft experiences that seamlessly integrate into the daily lives of individuals and become a functional part of their routines.',
            ],
        ];

        // services Development section

        $developmentService = [
            [
                'title' => 'Website',
                'text' => 'Our web design process focuses on creating websites that effectively "SELL" your products and effectively communicate your "brand story"',
            ],
            [
                'title' => 'Progressive Web App (PWA)',
                'text' => 'Progressive web applications (PWAs) offer a faster, more reliable, and more immersive version of your website or eCommerce store.',
            ],
            [
                'title' => 'Mobile App',
                'text' => 'Our app development expertise covers iOS, Android, and hybrid platforms.',
            ],
            [
                'title' => 'CMS',
                'text' => 'Content management systems (CMS) allow companies to easily create and manage websites for themselves and their clients.',
            ],
            [
                'title' => 'CRM',
                'text' => 'An effective customer relationship management (CRM) system enables businesses to nurture and grow their relationships with customers.',
            ],
            [
                'title' => 'Enterprise Software',
                'text' => 'Our software development expertise includes creating solutions that integrate and streamline the internal systems of a company, improving the efficiency of its workflow.',
            ],
        ];

        // testimonials
        $testimonials = [
            [
                'image' => 'https://ui-avatars.com/api/?size=128',
                'name' => 'john doe',
                'designation' => 'web development',
                'stars' => 4,
                'text' => 'Working with Ungrammary never felt like outsourcing or a services engagement work. It felt like working with true artists with great passion for doing their best work by pushing to their limits.',
            ],
        ];

        return Inertia::render('ServicePage', compact('heroData', 'designServiceData', 'developmentService', 'testimonials'));
    }

    public function progress()
    {
        // hero section
        $heroData = [
            'title' => 'Make it simple, but',
            'goldTitle' => 'significant',
            'image' => '/images/bulb.png',
        ];

        $progressDetail = [
            [
                'title' => 'Emphatize',
                'text' => 'In our design process, we strive to understand and empathize with the emotions and experiences of our users.',
                'image' => '/images/progress/1.png',
                'reverse' => false,
            ],
            [
                'title' => 'Define',
                'text' => "Defining a clear problem statement is an essential first step in our process because it helps us understand and articulate the specific goals and objectives of your project.",
                'image' => '/images/progress/2.png',
                'reverse' => true,
            ],
            [
                'title' => 'Ideate',
                'text' => 'To generate ideas and solutions, we utilize a variety of techniques such as sketching, prototyping, and brainstorming sessions.',
                'image' => '/images/progress/3.png',
                'reverse' => false,
            ],
            [
                'title' => 'Validate',
                'text' => 'To validate and refine business ideas, we use experimentation and user testing to gather evidence and make informed, low-risk decisions quickly.',
                'image' => '/images/progress/4.png',
                'reverse' => true,
            ],
        ];

        // testimonials
        $testimonials = [
            [
                'image' => 'https://ui-avatars.com/api/?size=128',
                'name' => 'john doe',
                'designation' => 'web development',
                'stars' => 4,
                'text' => 'Working with Ungrammary never felt like outsourcing or a services engagement work. It felt like working with true artists with great passion for doing their best work by pushing to their limits.',
            ],
        ];

        return Inertia::render('OurProgress', compact('heroData', 'progressDetail', 'testimonials'));
    }

    public function about()
    {
        $heroData = [
            'title1' => 'Design creates',
            'goldText1' => 'culture',
            'title2' => 'Culture shapes',
            'goldText2' => 'values',
            'title3' => 'Values determine the',
            'goldText3' => 'future',
            'image' => '/images/about-bg.png',
        ];

        $timelines = [
            [
                'title' => 'Started',
                'text' => 'In 2018 with a team of 10 Experts Today we are a family of 250+ in just 4 years.',
            ],
            [
                'title' => 'Delivered',
                'text' => 'Designed and delivered more than 100+ experinces among all type of companies ranges from startup to MNC’s',
            ],
            [
                'title' => 'recommended by top players',
                'text' => 'we are happy to witness the biggest growth after our collaboration with the small - Mid level startups specially.',
            ],
            [
                'title' => 'on a mission',
                'text' => 'our mission of designing Digital products that people love to use.',
            ],
        ];

        return Inertia::render('About', compact('heroData', 'timelines'));
    }

    public function contact()
    {
        $heroData = [
            'title' => 'Enough Talking',
            'goldTitle' => "Let's Collaborate",
            'image' => '/images/contact-img.png',
        ];

        $contactDetails = [
            'officeAddress' => '9th Main Rd, Sector 7, HSR Layout, Bengaluru, Karnataka 560102',
            'email' => 'contact@skyburstdev.com',
            'number' => '08041101282',
        ];

        return Inertia::render('Contact', compact('heroData', 'contactDetails'));
    }

    public function thanks()
    {
        return Inertia::render('Thanks');
    }

    public function contactStore(Request $request)
    {
        Mail::to('admin@admin.com')->send(new ContactMail($request->name, $request->email, $request->number));

        return back();
    }
}
