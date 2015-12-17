app = angular.module('app', ['ui.bootstrap', 'ngAnimate', 'ngRoute', 'ngMap'])

app.config ['$routeProvider', ($routeProvider) ->
  $routeProvider
    .when('/contact-us',
      templateUrl: 'partials/contact-us.html'
      controller: 'HomeCtrl')
    .when('/press',
      templateUrl: 'partials/press.html'
      controller: 'HomeCtrl')
    .when('/corporate',
      templateUrl: 'partials/corporate.html'
      controller: 'HomeCtrl')
    .when('/investor-relations',
      templateUrl: 'partials/investor-relations.html'
      controller: 'HomeCtrl')
    .when('/corporate-governance',
      templateUrl: 'partials/corporate-governance.html'
      controller: 'HomeCtrl')
    .when('/terms-and-conditions',
      templateUrl: 'partials/terms-and-conditions.html'
      controller: 'HomeCtrl')
    .when('/products',
      templateUrl: 'partials/products.html'
      controller: 'HomeCtrl')
    .when('/system-10',
      templateUrl: 'partials/system-10.html'
      controller: 'HomeCtrl')
    .when('/cipps-wx100',
      templateUrl: 'partials/cipps-wx100.html'
      controller: 'HomeCtrl')
    .when('/cipps-ex100',
      templateUrl: 'partials/cipps-ex100.html'
      controller: 'HomeCtrl')
    .when('/what-we-do',
      templateUrl: 'partials/what-we-do.html'
      controller: 'HomeCtrl')
    .when('/overview',
      templateUrl: 'partials/overview.html'
      controller: 'HomeCtrl')
    .when('/pipeline-integrity-assurance',
      templateUrl: 'partials/pipeline-integrity-assurance.html'
      controller: 'HomeCtrl')
    .when('/clear-water',
      templateUrl: 'partials/clear-water.html'
      controller: 'HomeCtrl')
    .when('/our-company',
      templateUrl: 'partials/our-company.html'
      controller: 'HomeCtrl')
    .when('/about-us',
      templateUrl: 'partials/about-us.html'
      controller: 'HomeCtrl')
    .when('/vision-and-values',
      templateUrl: 'partials/vision-and-values.html'
      controller: 'HomeCtrl')
    .when('/corporate-social-responsability',
      templateUrl: 'partials/corporate-social-responsability.html'
      controller: 'HomeCtrl')
    .when('/iiot',
      templateUrl: 'partials/iiot.html'
      controller: 'HomeCtrl')
    .when('/nanotechnology',
      templateUrl: 'partials/nanotechnology.html'
      controller: 'HomeCtrl')
    .when('/home',
      templateUrl: 'partials/home.html'
      controller: 'HomeCtrl')
    .otherwise redirectTo: '/home'
  return
]

app.controller 'HomeCtrl', ($scope) ->
  $scope.ourValues = [
    {
      heading: 'Quality'
      text: 'Everything we do will have our hallmark of excellence enriching our clients’ capabilities'
      img: 'images/ic_quality.png'
    }
    {
      heading: 'Integrity'
      text: 'We will build our business on moral values and give back wherever we can'
      img: 'images/ic_integrity.png'
    }
    {
      heading: 'Investing in people'
      text: 'We will hire those with the potential to be the best and make them the best'
      img: 'images/ic_investing_people.png'
    }
    {
      heading: 'Collaboration'
      text: 'When others see competitors, we see potential partnerships and shared goals'
      img: 'images/ic_collaboration.png'
    }
  ]

app.controller 'MenuCtrl', ($scope) ->
  $scope.menuItems = [
    {
      label: 'Contact Us'
      href: '#contact-us'
    }
    {
      label: 'Press'
      href: '#press'
      items: [
        {
          label: 'News'
          href: '#news'
        }
      ]
    }
    {
      label: 'Corporate'
      href: '#corporate'
      items: [
        {
          label: 'Investor Relations'
          href: '#investor-relations'
        }
        {
          label: 'Corporate Governance'
          href: '#corporate-governance'
        }
        {
          label: 'Terms And Conditions'
          href: '#terms-and-conditions'
        }
      ]
    }
    {
      label: 'Products'
      href: '#products'
      items: [
        {
          label: 'System 10'
          href: '#system-10'
        }
        {
          label: 'CIPPS™ WX100'
          href: '#cipps-wx100'
        }
        {
          label: 'CIPPS™ EX100'
          href: '#cipps-ex100'
        }
      ]
    }
    {
      label: 'What We Do'
      href: '#what-we-do'
      items: [
        {
          label: 'Overview'
          href: '#overview'
        }
        {
          label: 'Pipeline Integrity Assurance'
          href: '#pipeline-integrity-assurance'
        }
        {
          label: 'Clear Water'
          href: '#clear-water'
        }
      ]
    }
    {
      label: 'Our Company'
      href: '#our-company'
      items: [
        {
          label: 'About Us'
          href: '#about-us'
        }
        {
          label: 'Vision And Values'
          href: '#vision-and-values'
        }
        {
          label: 'Corporate Social Responsability'
          href: '#corporate-social-responsability'
        }
        {
          label: 'IIOT'
          href: '#iiot'
        }
        {
          label: 'Nanotechnology'
          href: '#nanotechnology'
        }
      ]
    }
    {
      label: 'Home'
      href: '#home'
    }
  ]

app.controller 'CarouselCtrl', ($scope) ->
  $scope.options =
    interval: 5000
    noWrapSlides: false
    slides: [
      {
        image: 'images/img_carousel1.png'
        text: 'Delivering 90% of our water supplies and over 70% of our Oil & Gas, pipelines are truly the arteries of the world, the unrecognized hidden backbone of the global economy. Oft-neglected, they can be transformed through our IIOT technologies.'
        bigText: 'Pipelines made intelligent'
      }
      {
        image: 'images/img_carousel2.png'
        text: 'Datatecnics Corporation won its 8th award since our founding at the prestigious CIR Awards 2015 against stiff competition including Google and Network Rail. We view these accolades as validation by industry experts of our innovative technology as we continue to successfully progress towards commercialization.'
        bigText: 'Winner of the Best Use of Technology in Risk Management Award 2015'
      }
      {
        image: 'images/img_carousel3.png'
        text: 'The Industrial Internet of Things will bring unprecedented connectivity and incredible potential to industry – if harnessed correctly. Datatecnics innovative IIOT solutions ensures ‘Big Data’ works with our clients to maximize their productivity and operational gains across the spectrum.'
        bigText: 'The Industrial Internet of Things will have an economic impact in excess of $4,000 billion by 2025'
      }
      {
        image: 'images/img_carousel4.png'
        text: 'Imagine a water technology which turns dangerously contaminated water into pure, WHO-standard water delivered by smart pipelines which can predict leaks even before they happen. We’re developing that at Datatecnics.'
        bigText: 'Water technology with a difference'
      }
      {
        image: 'images/img_carousel5.png'
        text: 'Every organization faces a choice in an era where industrial disruption is the norm – transform or become irrelevant. Datatecnics innovative portfolio of technologies are built to help our clients thrive in this new era. Where others see intractable problems, we see opportunity.'
        bigText: 'There was more innovation in the last 15 years than the whole of the 20th century. This will repeat again in the next 8'
      }
      {
        image: 'images/img_carousel6.png'
        text: 'With the UN forecasting a 40% global shortfall in water based on current trends within the next 20 years, the need for innovative solutions is pressing. System 10 the world’s first Nano Water Processing System, turns recycling from not just an environmental concern, but also into the right commercial decision with built-in IIOT technology.'
        bigText: 'System 10 – Providing Water Beyond Abundance'
      }
    ]

  return
