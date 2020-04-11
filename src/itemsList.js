import houseIcon from './assets/svg/house.svg';
import carIcon from './assets/svg/car.svg';
import electronicDevicesIcon from './assets/svg/electronic-devices.svg';
import entertainmentIcon from './assets/svg/entertainment.svg';
import homeApplianceIcon from './assets/svg/home-appliance.svg';
import personalStuffIcon from './assets/svg/personal-stuff.svg';
import recruitmentIcon from './assets/svg/recruitment.svg';
import serviceIcon from './assets/svg/service.svg';
import socialIcon from './assets/svg/social.svg';
import businessIcon from './assets/svg/business.svg';

const itemsList = [
    { 
        icon: houseIcon,
        link: 'real-estate',
        text: 'املاک',
        children: [
            {
                link: 'buy-residential',
                text: 'فروش مسکونی',
                children: [
                    {
                        link: 'buy-apartment',
                        text: 'آپارتمان'
                    },
                    {
                        link: 'buy-villa',
                        text: 'خانه و ویلا'
                    },
                    {
                        link: 'buy-old-house',
                        text: 'زمین و کلنگی'
                    }
                ]
            },
            {
                link: 'rent-residential',
                text: 'اجاره مسکونی',
                children: [
                    {
                        link: 'rent-apartment',
                        text: 'آپارتمان'
                    },
                    {
                        link: 'rent-villa',
                        text: 'خانه و ویلا'
                    }
                ]
            },
            {
                link: 'buy-commercial-property',
                text: 'فروش اداری و تجاری',
                children: [
                    {
                        link: 'buy-office',
                        text: 'دفتر کار، اتاق اداری و مطب'
                    },
                    {
                        link: 'buy-store',
                        text: 'مغازه و غرفه'
                    },
                    {
                        link: 'buy-industrial-agricultural-property',
                        text: 'صنعتی، کشاورزی و تجاری'
                    }
                ]
            },
            {
                link: 'rent-commercial-property',
                text: 'اجاره اداری و تجاری',
                children: [
                    {
                        link: 'rent-office',
                        text: 'دفتر کار، اتاق اداری و مطب'
                    },
                    {
                        link: 'rent-store',
                        text: 'مغازه و غرفه'
                    },
                    {
                        link: 'rent-industrial-agricultural-property',
                        text: 'صنعتی، کشاورزی و تجاری'
                    }
                ]
            },
            {
                link: 'rent-temporary',
                text: 'اجاره کوتاه مدت',
                children: [
                    {
                        link: 'rent-temporary-suite-apartment',
                        text: 'آپارتمان و سوئیت'
                    },
                    {
                        link: 'rent-temporary-villa',
                        text: 'ویلا و باغ'
                    },
                    {
                        link: 'rent-temporary-workspace',
                        text: 'دفتر کار و فضای آموزشی'
                    }
                ]
            },
            {
                link: 'real-estate-services',
                text: 'خدمات املاک',
                children: [
                    {
                        link: 'home-agencies',
                        text: 'آژانس املاک'
                    },
                    {
                        link: 'contribution-construction',
                        text: 'مشارکت در ساخت'
                    },
                    {
                        link: 'real-estate-financial-legal',
                        text: 'امور مالی و حقوقی'
                    },
                    {
                        link: 'pre-sell-home',
                        text: 'پیش‌فروش'
                    }
                ]
            }
        ]
    },
    { 
        icon: carIcon,
        link: 'vehicles',
        text: 'وسایل نقلیه',
        children: [
            {
                link: 'auto',
                text: 'خودرو',
                children: [
                    {
                        link: 'car',
                        text: 'سواری'
                    },
                    {
                        link: 'classic-car',
                        text: 'کلاسیک'
                    },
                    {
                        link: 'rental-car',
                        text: 'اجاره‌ای'
                    },
                    {
                        link: 'heavy-car',
                        text: 'سنگین'
                    }
                ]
            },
            {
                link: 'car-accessories',
                text: 'قطعات یدکی و لوازم جانبی خودرو',
                children: []
            },
            {
                link: 'motorcycles',
                text: 'موتورسیکلت و لوازم جانبی',
                children: []
            },
            {
                link: 'boat',
                text: 'قایق و لوازم جانبی',
                children: []
            }
        ]
    },
    { 
        icon: electronicDevicesIcon,
        link: 'electronic-devices',
        text: 'لوازم الکترونیکی',
        children: [
            {
                link: 'mobile-tablet',
                text: 'موبایل و تبلت',
                children: [
                    {
                        link: 'mobile-phones',
                        text: 'گوشی موبایل'
                    },
                    {
                        link: 'tablet',
                        text: 'تبلت'
                    },
                    {
                        link: 'mobile-tablet-accessories',
                        text: 'لوازم جانبی موبایل و تبلت'
                    },
                    {
                        link: 'sim-card',
                        text: 'سیم کارت'
                    }
                ]
            },
            {
                link: 'computers',
                text: 'رایانه',
                children: [
                    {
                        link: 'laptop-notebook-macbook',
                        text: 'رایانه همراه'
                    },
                    {
                        link: 'desktop-computer',
                        text: 'رایانه رومیزی'
                    },
                    {
                        link: 'computer-parts-accessories',
                        text: 'قطعات و لوازم جانبی'
                    },
                    {
                        link: 'modem-network-equipments',
                        text: 'مودم و تجهیزات شبکه'
                    },
                    {
                        link: 'printer-scanner-fax',
                        text: 'پرینتر/اسکنر/کپی/فکس'
                    }
                ]
            },
            {
                link: 'game-consoles',
                text: 'کنسول، بازی ویدئویی و آنلاین',
                children: []
            },
            {
                link: 'video-audio-device',
                text: 'صوتی و تصویری',
                children: [
                    {
                        link: 'film-music',
                        text: 'فیلم و موسیقی'
                    },
                    {
                        link: 'camera',
                        text: 'دوربین عکاسی و فیلم‌برداری'
                    },
                    {
                        link: 'headphone-speaker-microphone',
                        text: 'پخش‌کننده همراه'
                    },
                    {
                        link: 'home-audio-system',
                        text: 'سیستم صوتی خانگی'
                    },
                    {
                        link: 'dvd-bluray-player',
                        text: 'ویدئو و پخش کننده DVD'
                    },
                    {
                        link: 'tv-projector',
                        text: 'تلویزیون و پروژکتور'
                    },
                    {
                        link: 'cctv',
                        text: 'دوربین مدار بسته'
                    }
                ]
            },
            {
                link: 'telephone',
                text: 'تلفن رومیزی',
                children: []
            }
        ]
    },
    { 
        icon: homeApplianceIcon,
        link: 'home-and-kitchen',
        text: 'مربوط به خانه',
        children: [
            {
                link: 'home-decor-furniture',
                text: 'وسایل و تزئینات خانه',
                children: [
                    {
                        link: 'art-decorative',
                        text: 'تزئینی و آثار هنری'
                    },
                    {
                        link: 'lighting',
                        text: 'لوازم روشنایی'
                    },
                    {
                        link: 'table-desk-chair',
                        text: 'میز و صندلی'
                    },
                    {
                        link: 'carpets',
                        text: 'فرش و گلیم'
                    },
                    {
                        link: 'closet-storage',
                        text: 'کمد و بوفه'
                    },
                    {
                        link: 'curtain-tablecloth',
                        text: 'پرده و رومیزی'
                    },
                    {
                        link: 'bedroom-accessories',
                        text: 'تخت و اتاق خواب'
                    },
                    {
                        link: 'sofa-armchair',
                        text: 'مبلمان و صندلی راحتی'
                    },
                    {
                        link: 'tv-stand',
                        text: 'میز تلویزیون و وسایل سیستم پخش'
                    }
                ]
            },
            {
                link: 'kitchen-appliances',
                text: 'وسایل آشپزخانه',
                children: [
                    {
                        link: 'dishwasher',
                        text: 'ماشین ظرفشویی'
                    },
                    {
                        link: 'refrigerator-freezer',
                        text: 'یخچال و فریزر'
                    },
                    {
                        link: 'kitchen-accessories',
                        text: 'وسایل آشپزی و غذاخوری'
                    },
                    {
                        link: 'microwave-stove',
                        text: 'مایکروویو و گاز'
                    },
                    {
                        link: 'washing-machine',
                        text: 'ماشین لباسشویی و خشک کننده'
                    }
                ]
            },
            {
                link: 'home-appliances',
                text: 'ابزار',
                children: [
                    {
                        link: 'vacuum-cleaner-sewing-machine-iron',
                        text: 'نظافت و خیاطی و اتو'
                    },
                    {
                        link: 'power-and-hand-tools',
                        text: 'تعمیرات'
                    }
                ]
            },
            {
                link: 'building-garden',
                text: 'ساختمان و حیاط',
                children: [
                    {
                        link: 'bathroom-fixtures',
                        text: 'سرویس بهداشتی و سونا'
                    },
                    {
                        link: 'heating-cooling-systems',
                        text: 'سیستم گرمایشی سرمایشی و گاز'
                    },
                    {
                        link: 'kitchen-equipments',
                        text: 'آشپزخانه'
                    },
                    {
                        link: 'patio-balcony',
                        text: 'حیاط و ایوان'
                    },
                    {
                        link: 'garden-tools',
                        text: 'ابزار باغبانی'
                    }
                ]
            }
        ]
    },
    { 
        icon: serviceIcon,
        link: 'services',
        text: 'خدمات',
        children: [
            {
                link: 'vehicles-services',
                text: 'موتور و ماشین',
                children: []
            },
            {
                link: 'catering-services',
                text: 'پذیرایی/مراسم',
                children: []
            },
            {
                link: 'technology-services',
                text: 'خدمات رایانه‌ای و موبایل',
                children: [
                    {
                        link: 'domain-services',
                        text: 'فروش دامنه و سایت'
                    },
                    {
                        link: 'website-services',
                        text: 'میزبانی و طراحی سایت'
                    },
                    {
                        link: 'internet-services',
                        text: 'خدمات پهنای باند اینترنت'
                    },
                    {
                        link: 'computer-services',
                        text: 'خدمات نرم‌افزار و سخت‌افزار کامپیوتر'
                    },
                    {
                        link: 'mobile-services',
                        text: 'تعمیرات نرم‌افزار و سخت‌افزار گوشی موبایل'
                    }
                ]
            },
            {
                link: 'financial-services',
                text: 'مالی/حسابداری/بیمه',
                children: []
            },
            {
                link: 'transport-logistic-services',
                text: 'حمل و نقل',
                children: []
            },
            {
                link: 'craft-skill-services',
                text: 'پیشه و مهارت',
                children: []
            },
            {
                link: 'beauty-services',
                text: 'آرایشگری و زیبایی',
                children: []
            },
            {
                link: 'entertaining-services',
                text: 'سرگرمی',
                children: []
            },
            {
                link: 'cleaning-services',
                text: 'نظافت',
                children: []
            },
            {
                link: 'gardening-services',
                text: 'باغبانی و درختکاری',
                children: []
            },
            {
                link: 'teaching-services',
                text: 'آموزشی',
                children: [
                    {
                        link: 'foreign-language',
                        text: 'زبان خارجی'
                    },
                    {
                        link: 'educational-teaching',
                        text: 'دروس مدرسه و دانشگاه'
                    },
                    {
                        link: 'software-teaching',
                        text: 'نرم‌افزار'
                    },
                    {
                        link: 'art-teaching',
                        text: 'هنری'
                    },
                    {
                        link: 'sports-teaching',
                        text: 'ورزشی'
                    },
                    {
                        link: 'educational-consulting',
                        text: 'مشاوره تحصیلی'
                    }
                ]
            }
        ]
    },
    { 
        icon: personalStuffIcon,
        link: 'personal-goods',
        text: 'وسایل شخصی',
        children: [
            {
                link: 'apparel',
                text: 'کیف، کفش و لباس',
                children: [
                    {
                        link: 'bag-shoes-belt',
                        text: 'کیف/کفش/کمربند'
                    },
                    {
                        link: 'clothing',
                        text: 'لباس'
                    }
                ]
            },
            {
                link: 'accessories',
                text: 'تزیینی',
                children: [
                    {
                        link: 'watches',
                        text: 'ساعت'
                    },
                    {
                        link: 'jewellery',
                        text: 'جواهرات'
                    },
                    {
                        link: 'trinket',
                        text: 'بدلیجات'
                    }
                ]
            },
            {
                link: 'beauty-and-personal-care',
                text: 'آرایشی، بهداشتی و درمانی',
                children: []
            },
            {
                link: 'child-apparel',
                text: 'کفش و لباس بچه',
                children: []
            },
            {
                link: 'child-products',
                text: 'وسایل بچه و اسباب بازی',
                children: [
                    {
                        link: 'child-toys',
                        text: 'اسباب بازی'
                    },
                    {
                        link: 'stroller',
                        text: 'کالسکه و لوازم جانبی'
                    },
                    {
                        link: 'child-furniture',
                        text: 'صندلی بچه'
                    },
                    {
                        link: 'child-stuff',
                        text: 'اسباب و اثاث بچه'
                    }
                ]
            },
            {
                link: 'stationery',
                text: 'لوازم التحریر',
                children: []
            }
        ]
    },
    { 
        icon: entertainmentIcon,
        link: 'entertainment',
        text: 'سرگرمی و فراغت',
        children: [
            {
                link: 'ticket',
                text: 'بلیط',
                children: [
                    {
                        link: 'concert-ticket',
                        text: 'کنسرت'
                    },
                    {
                        link: 'theatre-cinema-ticket',
                        text: 'تئاتر و سینما'
                    },
                    {
                        link: 'discount-gift-card',
                        text: 'کارت هدیه و تخفیف'
                    },
                    {
                        link: 'match-sport-ticket',
                        text: 'اماکن و مسابقات ورزشی'
                    },
                    {
                        link: 'sport-ticket',
                        text: 'ورزشی'
                    },
                    {
                        link: 'travel-ticket',
                        text: 'اتوبوس، مترو و قطار'
                    }
                ]
            },
            {
                link: 'tours',
                text: 'تور و چارتر',
                children: []
            },
            {
                link: 'publication',
                text: 'کتاب و مجله',
                children: [
                    {
                        link: 'educational-book',
                        text: 'آموزشی'
                    },
                    {
                        link: 'literary-book',
                        text: 'ادبی'
                    },
                    {
                        link: 'historical-book',
                        text: 'تاریخی'
                    },
                    {
                        link: 'religious-book',
                        text: 'مذهبی'
                    },
                    {
                        link: 'magazine',
                        text: 'مجلات'
                    }
                ]
            },
            {
                link: 'bike-skate-scooter',
                text: 'دوچرخه/اسکیت/اسکوتر',
                children: []
            },
            {
                link: 'pets-animals',
                text: 'حیوانات',
                children: [
                    {
                        link: 'cats',
                        text: 'گربه'
                    },
                    {
                        link: 'rodents',
                        text: 'موش و خرگوش'
                    },
                    {
                        link: 'reptiles',
                        text: 'خزنده'
                    },
                    {
                        link: 'birds',
                        text: 'پرنده'
                    },
                    {
                        link: 'fishes',
                        text: 'ماهی'
                    },
                    {
                        link: 'pet-supplies',
                        text: 'لوازم جانبی'
                    },
                    {
                        link: 'farm-animals',
                        text: 'حیوانات مزرعه'
                    },
                    {
                        link: 'dogs',
                        text: 'سگ'
                    }
                ]
            },
            {
                link: 'collecting',
                text: 'کلکسیون و سرگرمی',
                children: [
                    {
                        link: 'stamp-coin-collecting',
                        text: 'سکه،تمبر و اسکناس'
                    },
                    {
                        link: 'antique-objects',
                        text: 'اشیای عتیقه'
                    }
                ]
            },
            {
                link: 'musical-instruments',
                text: 'آلات موسیقی',
                children: [
                    {
                        link: 'guitars',
                        text: 'گیتار، بیس و امپلیفایر'
                    },
                    {
                        link: 'wind-instrument',
                        text: 'سازهای بادی'
                    },
                    {
                        link: 'organ-piano-accordion',
                        text: 'پیانو/کیبورد/آکاردئون'
                    },
                    {
                        link: 'iranian-instruments',
                        text: 'سنتی'
                    },
                    {
                        link: 'percussion-instruments',
                        text: 'درام و پرکاشن'
                    },
                    {
                        link: 'violins',
                        text: 'ویولن'
                    }
                ]
            },
            {
                link: 'sport-entertainment',
                text: 'ورزش و تناسب اندام',
                children: [
                    {
                        link: 'ball-sports',
                        text: 'ورزش‌های توپی'
                    },
                    {
                        link: 'mountaineering-camping',
                        text: 'کوهنوردی و کمپینگ'
                    },
                    {
                        link: 'water-sports',
                        text: 'غواصی و ورزش‌های آبی'
                    },
                    {
                        link: 'fishing',
                        text: 'ماهیگیری'
                    },
                    {
                        link: 'sport-equipment',
                        text: 'تجهیزات ورزشی'
                    },
                    {
                        link: 'winter-sports',
                        text: 'ورزش‌های زمستانی'
                    },
                    {
                        link: 'horse-riding',
                        text: 'اسب و تجهیزات اسب سواری'
                    }
                ]
            },
            {
                link: 'game-and-toys',
                text: 'اسباب بازی',
                children: []
            }
        ]
    },
    { 
        icon: socialIcon,
        link: 'social-services',
        text: 'اجتماعی',
        children: [
            {
                link: 'event',
                text: 'رویداد',
                children: [
                    {
                        link: 'auction',
                        text: 'حراج'
                    },
                    {
                        link: 'seminars-conference',
                        text: 'گردهمایی و همایش'
                    },
                    {
                        link: 'music-theater',
                        text: 'موسیقی و تئاتر'
                    },
                    {
                        link: 'events-sports',
                        text: 'ورزشی'
                    }
                ]
            },
            {
                link: 'voluntary',
                text: 'داوطلبانه',
                children: [
                    {
                        link: 'education-research-partner',
                        text: 'تحقیقاتی'
                    }
                ]
            },
            {
                link: 'missing',
                text: 'گم‌شده‌ها',
                children: [
                    {
                        link: 'lost-animals',
                        text: 'حیوانات'
                    },
                    {
                        link: 'lost-objects',
                        text: 'اشیا'
                    }
                ]
            }
        ]
    },
    { 
        icon: businessIcon,
        link: 'businesses',
        text: 'برای کسب و کار',
        children: [
            {
                link: 'business-equipment',
                text: 'تجهیزات و ماشین‌آلات',
                children: [
                    {
                        link: 'store-equipment',
                        text: 'فروشگاه و مغازه'
                    },
                    {
                        link: 'barber-shop-equipment',
                        text: 'آرایشگاه و سالن‌های زیبایی'
                    },
                    {
                        link: 'office-equipment',
                        text: 'دفتر کار'
                    },
                    {
                        link: 'industrial-equipment',
                        text: 'صنعتی'
                    },
                    {
                        link: 'restaurant-equipment',
                        text: 'کافی‌شاپ و رستوران'
                    },
                    {
                        link: 'medical-equipment',
                        text: 'پزشکی'
                    }
                ]
            },
            {
                link: 'wholesale',
                text: 'عمده فروشی',
                children: []
            }
        ]
    },
    { 
        icon: recruitmentIcon,
        link: 'jobs',
        text: 'استخدام و کاریابی',
        children: [
            {
                link: 'administrative-jobs',
                text: 'اداری و مدیریت',
                children: []
            },
            {
                link: 'janitorial-jobs',
                text: 'سرایداری و نظافت',
                children: []
            },
            {
                link: 'architect-jobs',
                text: 'معماری، عمران و ساختمانی',
                children: []
            },
            {
                link: 'service-jobs',
                text: 'خدمات فروشگاه و رستوران',
                children: []
            },
            {
                link: 'it-computer-jobs',
                text: 'رایانه و فناوری اطلاعات',
                children: []
            },
            {
                link: 'finance-legal-jobs',
                text: 'مالی و حسابداری و حقوقی',
                children: []
            },
            {
                link: 'marketing-jobs',
                text: 'بازاریابی و فروش',
                children: []
            },
            {
                link: 'technical-jobs',
                text: 'صنعتی و فنی و مهندسی',
                children: []
            },
            {
                link: 'teaching-jobs',
                text: 'آموزشی',
                children: []
            },
            {
                link: 'transport-delivery-jobs',
                text: 'حمل و نقل',
                children: []
            },
            {
                link: 'health-beauty-jobs',
                text: 'درمانی و زیبایی و بهداشتی',
                children: []
            },
            {
                link: 'art-media-jobs',
                text: 'هنری و رسانه',
                children: []
            }
        ]
    }
];

export default itemsList;