// Service Details Data
const serviceDetails = {
    network: {
        title: 'Network Solutions',
        icon: '🌐',
        description: 'High-speed broadband, Wi-Fi installation, and enterprise networking',
        products: [
            {
                name: 'Fiber Optic Broadband',
                icon: '⚡',
                description: 'Ultra-fast fiber connection for homes and offices',
                specs: ['Up to 1 Gbps speed', 'Low latency', 'Reliable 24/7', 'Installation included']
            },
            {
                name: 'Wi-Fi 6 Systems',
                icon: '📡',
                description: 'Latest WiFi 6 technology for seamless connectivity',
                specs: ['WiFi 6E support', 'Multi-device support', 'Extended range', 'Easy setup']
            },
            {
                name: 'Enterprise LAN/WAN',
                icon: '🔗',
                description: 'Scalable network infrastructure for businesses',
                specs: ['Enterprise-grade', 'Load balancing', 'VPN ready', 'Redundant paths']
            }
        ],
        features: [
            { icon: '✓', title: 'Fast Installation', desc: 'Quick setup within 48 hours' },
            { icon: '🔧', title: 'Technical Support', desc: '24/7 expert support team' },
            { icon: '📊', title: 'Network Monitoring', desc: 'Real-time performance tracking' },
            { icon: '🛡️', title: 'Security Enhanced', desc: 'Built-in DDoS protection' }
        ],
        pricing: [
            { name: 'Basic', price: '$49', duration: '/month', features: ['50 Mbps speed', 'Basic support', 'Home WiFi router', 'Email support'] },
            { name: 'Professional', price: '$99', duration: '/month', features: ['500 Mbps speed', 'Priority support', 'Advanced router', 'Phone + Email', '99.5% uptime SLA'], featured: true },
            { name: 'Enterprise', price: 'Custom', duration: 'Quote', features: ['1 Gbps+ speed', '24/7 dedicated support', 'Multiple routers', 'Network management', '99.99% uptime SLA'] }
        ]
    },
    cctv: {
        title: 'CCTV Solutions',
        icon: '📹',
        description: 'Professional surveillance systems for complete security',
        products: [
            {
                name: 'SIM-Based Cameras',
                icon: '📱',
                description: 'Mobile-enabled cameras without WiFi dependency',
                specs: ['4K resolution', '2G/3G/4G connectivity', 'No internet needed', 'Real-time alerts']
            },
            {
                name: 'WiFi Cameras',
                icon: '📡',
                description: 'Wireless surveillance with cloud storage',
                specs: ['1080p - 4K options', 'Night vision', 'Cloud backup', 'Mobile app access']
            },
            {
                name: 'Satellite Cameras',
                icon: '🛰️',
                description: 'Remote area coverage via satellite',
                specs: ['Global coverage', 'Low latency', 'Weather resistant', 'Solar powered option']
            }
        ],
        features: [
            { icon: '👁️', title: '4K Resolution', desc: 'Crystal clear video quality' },
            { icon: '🌙', title: 'Night Vision', desc: 'Infrared technology for dark conditions' },
            { icon: '☁️', title: 'Cloud Storage', desc: 'Secure 30-day retention' },
            { icon: '⚠️', title: 'Motion Detection', desc: 'AI-powered threat alerts' }
        ],
        pricing: [
            { name: 'Starter', price: '$199', duration: 'setup', features: ['2 cameras', '1080p resolution', 'Basic DVR', 'Local storage', '30 days free cloud'] },
            { name: 'Standard', price: '$499', duration: 'setup', features: ['4 cameras', '4K resolution', 'Advanced DVR', '2TB storage', '90 days cloud'], featured: true },
            { name: 'Premium', price: '$999', duration: 'setup', features: ['8+ cameras', 'Mixed resolution', 'NVR system', '4TB+ storage', 'Unlimited cloud'] }
        ]
    },
    cyber: {
        title: 'Cybersecurity',
        icon: '🔒',
        description: 'Enterprise-grade security to protect your digital assets',
        products: [
            {
                name: 'Firewall Solutions',
                icon: '🧱',
                description: 'Advanced threat protection and network filtering',
                specs: ['Next-gen firewall', 'DDoS protection', 'IPS/IDS system', 'URL filtering']
            },
            {
                name: 'Endpoint Protection',
                icon: '💻',
                description: 'Comprehensive device and data protection',
                specs: ['Antivirus + Anti-malware', 'File encryption', 'Device control', 'Remote wipe']
            },
            {
                name: 'Security Audits',
                icon: '🔍',
                description: 'Professional vulnerability assessment',
                specs: ['Penetration testing', 'Compliance check', 'Risk assessment', 'Detailed report']
            }
        ],
        features: [
            { icon: '🛡️', title: 'Threat Detection', desc: '24/7 monitoring and alerts' },
            { icon: '🔐', title: 'Data Encryption', desc: 'Military-grade AES-256' },
            { icon: '📋', title: 'Compliance Ready', desc: 'GDPR, HIPAA, ISO 27001' },
            { icon: '👨‍💼', title: 'Expert Support', desc: 'Certified security professionals' }
        ],
        pricing: [
            { name: 'Startup', price: '$299', duration: '/month', features: ['Up to 50 devices', 'Basic firewall', 'Antivirus only', 'Email support', 'Monthly reports'] },
            { name: 'Business', price: '$699', duration: '/month', features: ['Up to 200 devices', 'Advanced firewall', 'Full endpoint protection', 'Priority support', 'Weekly reports'], featured: true },
            { name: 'Enterprise', price: 'Custom', duration: 'Quote', features: ['Unlimited devices', 'Next-gen firewall', 'SOC services', '24/7 dedicated team', 'Real-time monitoring'] }
        ]
    },
    internet: {
        title: 'Internet & Networking',
        icon: '🌐',
        description: 'Complete connectivity solutions for modern businesses',
        products: [
            {
                name: 'Broadband Setup',
                icon: '🚀',
                description: 'Professional broadband installation and optimization',
                specs: ['Multiple ISP options', 'Optimal routing', 'Speed optimization', 'Installation service']
            },
            {
                name: 'VPN Services',
                icon: '🔐',
                description: 'Secure remote access and data protection',
                specs: ['Military encryption', 'No logs policy', 'Multiple servers', 'Unlimited bandwidth']
            },
            {
                name: 'Bandwidth Management',
                icon: '📊',
                description: 'Intelligent traffic management and QoS',
                specs: ['Traffic shaping', 'Priority allocation', 'Congestion control', 'Real-time analytics']
            }
        ],
        features: [
            { icon: '⚡', title: 'High Speed', desc: 'Up to 1 Gbps connectivity' },
            { icon: '99', title: '99.9% Uptime', desc: 'Reliable service guarantee' },
            { icon: '🔄', title: 'Failover Support', desc: 'Automatic backup connection' },
            { icon: '📞', title: 'Expert Support', desc: '24/7 technical assistance' }
        ],
        pricing: [
            { name: 'Home', price: '$49', duration: '/month', features: ['100 Mbps speed', 'Unlimited data', 'Basic router', 'Email support', '7-day free trial'] },
            { name: 'Professional', price: '$149', duration: '/month', features: ['500 Mbps speed', 'Unlimited data', 'Enterprise router', 'Phone support', '30-day guarantee'], featured: true },
            { name: 'Ultra', price: '$299', duration: '/month', features: ['1 Gbps speed', 'Unlimited data', 'Premium equipment', '24/7 support', 'SLA included'] }
        ]
    },
    cybersecurity: {
        title: 'Cybersecurity Solutions',
        icon: '🔒',
        description: 'Advanced security measures for complete protection',
        products: [
            {
                name: 'Threat Intelligence',
                icon: '🔍',
                description: 'Real-time threat monitoring and response',
                specs: ['AI-powered detection', 'Incident response', 'Threat hunting', 'Breach analysis']
            },
            {
                name: 'Security Awareness',
                icon: '👥',
                description: 'Employee training and awareness programs',
                specs: ['Phishing simulations', 'Training modules', 'Compliance training', 'Certification']
            },
            {
                name: 'Incident Response',
                icon: '🚨',
                description: 'Rapid response team for security incidents',
                specs: ['24/7 availability', 'Expert team', 'Forensic analysis', 'Legal support']
            }
        ],
        features: [
            { icon: '🎯', title: 'Precision Security', desc: 'Zero-trust architecture' },
            { icon: '⚙️', title: 'Automation', desc: 'Automated threat response' },
            { icon: '📈', title: 'Compliance', desc: 'Multi-standard compliance' },
            { icon: '🏆', title: 'Best Practices', desc: 'Industry-leading standards' }
        ],
        pricing: [
            { name: 'Essentials', price: '$399', duration: '/month', features: ['Basic threat detection', 'Email filtering', 'Password manager', 'Quarterly training'] },
            { name: 'Advanced', price: '$899', duration: '/month', features: ['Advanced threat detection', 'Email + web filtering', 'Advanced analytics', 'Monthly training'], featured: true },
            { name: 'Ultimate', price: 'Custom', duration: 'Quote', features: ['Managed security services', 'Full SOC', 'Incident response', 'Continuous training'] }
        ]
    },
    'cctv-surveillance': {
        title: 'CCTV & Surveillance',
        icon: '📹',
        description: 'Complete video surveillance solutions',
        products: [
            {
                name: 'HD/4K Cameras',
                icon: '📷',
                description: 'High-definition video capture',
                specs: ['1080p to 4K', 'Wide angle lens', 'Low light capability', 'Weather resistant']
            },
            {
                name: 'DVR/NVR Systems',
                icon: '💾',
                description: 'Recording and storage solutions',
                specs: ['16-64 channel', 'Redundant storage', 'Real-time playback', 'Remote access']
            },
            {
                name: 'Remote Monitoring',
                icon: '📱',
                description: 'Access your cameras from anywhere',
                specs: ['Mobile app', 'Web dashboard', 'Push notifications', 'Cloud backup']
            }
        ],
        features: [
            { icon: '👁️', title: 'Crystal Clear', desc: '4K resolution available' },
            { icon: '🌙', title: 'Night Vision', desc: '50m infrared range' },
            { icon: '☁️', title: 'Cloud Backup', desc: 'Automatic data backup' },
            { icon: '🔔', title: 'Smart Alerts', desc: 'Motion and person detection' }
        ],
        pricing: [
            { name: 'Essential', price: '$299', duration: 'setup', features: ['4 cameras', '1080p HD', '1TB storage', 'Basic app'] },
            { name: 'Standard', price: '$599', duration: 'setup', features: ['8 cameras', '4K UHD', '4TB storage', 'Advanced app'], featured: true },
            { name: 'Premium', price: '$1099', duration: 'setup', features: ['16 cameras', '4K+ cameras', '8TB+ storage', 'Pro features'] }
        ]
    },
    troubleshooting: {
        title: 'Network Troubleshooting',
        icon: '🛠️',
        description: 'Expert problem diagnosis and resolution',
        products: [
            {
                name: 'Connectivity Diagnosis',
                icon: '📡',
                description: 'Identify and fix network connection issues',
                specs: ['Speed testing', 'Signal analysis', 'Interference detection', 'Root cause analysis']
            },
            {
                name: 'Performance Optimization',
                icon: '⚡',
                description: 'Improve network speed and reliability',
                specs: ['Bandwidth optimization', 'Load balancing', 'Latency reduction', 'Jitter elimination']
            },
            {
                name: 'Equipment Support',
                icon: '🔧',
                description: 'Router and modem configuration',
                specs: ['Device setup', 'Firmware updates', 'Security hardening', 'Performance tuning']
            }
        ],
        features: [
            { icon: '🚀', title: 'Fast Resolution', desc: 'Same-day service available' },
            { icon: '💯', title: 'Guaranteed Fix', desc: '100% satisfaction guarantee' },
            { icon: '📞', title: 'Expert Team', desc: 'Certified technicians' },
            { icon: '💰', title: 'Affordable', desc: 'No hidden charges' }
        ],
        pricing: [
            { name: 'One-Time', price: '$99', duration: 'visit', features: ['Problem diagnosis', 'Basic fix included', 'Consultation', 'Invoice provided'] },
            { name: 'Monthly', price: '$149', duration: '/month', features: ['Monthly checkups', 'Priority response', 'Free optimization', 'Parts discount'], featured: true },
            { name: 'Premium', price: '$299', duration: '/month', features: ['24/7 response', 'Dedicated support', 'Full optimization', 'Guaranteed uptime'] }
        ]
    },
    server: {
        title: 'Server Management',
        icon: '💾',
        description: 'Complete server administration and maintenance',
        products: [
            {
                name: 'Server Deployment',
                icon: '🚀',
                description: 'Professional server setup and configuration',
                specs: ['OS installation', 'Software setup', 'Security hardening', 'Performance tuning']
            },
            {
                name: 'Backup & Recovery',
                icon: '💾',
                description: 'Automated backup and disaster recovery',
                specs: ['Daily backups', 'Cloud storage', 'Recovery testing', '99.9% availability']
            },
            {
                name: 'Monitoring & Support',
                icon: '📊',
                description: '24/7 server monitoring and maintenance',
                specs: ['Real-time monitoring', 'Proactive maintenance', 'Emergency support', 'Performance reports']
            }
        ],
        features: [
            { icon: '🛡️', title: 'High Security', desc: 'Enterprise-grade protection' },
            { icon: '⚙️', title: 'Automation', desc: 'Automated management tasks' },
            { icon: '📈', title: 'Scalability', desc: 'Easy expansion as needed' },
            { icon: '💰', title: 'Cost Effective', desc: 'Pay only for what you use' }
        ],
        pricing: [
            { name: 'Starter', price: '$299', duration: '/month', features: ['Single server', 'Basic monitoring', 'Daily backups', 'Business hours support'] },
            { name: 'Professional', price: '$699', duration: '/month', features: ['2-4 servers', 'Advanced monitoring', 'Hourly backups', '24/7 support'], featured: true },
            { name: 'Enterprise', price: 'Custom', duration: 'Quote', features: ['Unlimited servers', 'Full management', 'Real-time backups', 'Dedicated team'] }
        ]
    },
    consulting: {
        title: 'IT Consulting',
        icon: '📊',
        description: 'Strategic technology guidance for your business',
        products: [
            {
                name: 'Infrastructure Planning',
                icon: '📐',
                description: 'Design scalable IT infrastructure',
                specs: ['Capacity planning', 'Technology selection', 'Budget optimization', 'Future proofing']
            },
            {
                name: 'Digital Transformation',
                icon: '🚀',
                description: 'Modernize your business operations',
                specs: ['Process automation', 'Cloud migration', 'Change management', 'Staff training']
            },
            {
                name: 'Security Strategy',
                icon: '🔒',
                description: 'Develop comprehensive security plans',
                specs: ['Risk assessment', 'Strategy development', 'Implementation', 'Compliance audit']
            }
        ],
        features: [
            { icon: '👨‍💼', title: 'Expert Consultants', desc: '20+ years experience' },
            { icon: '📊', title: 'Data-Driven', desc: 'Analytics-based recommendations' },
            { icon: '💼', title: 'Business Focused', desc: 'ROI-driven solutions' },
            { icon: '🤝', title: 'Partnership', desc: 'Long-term engagement' }
        ],
        pricing: [
            { name: 'Assessment', price: '$1,500', duration: 'one-time', features: ['Current state analysis', 'Gap identification', 'Recommendations', 'Report delivery'] },
            { name: 'Strategy', price: '$3,000', duration: 'one-time', features: ['Detailed planning', 'Implementation roadmap', 'Technology selection', 'Training plan'], featured: true },
            { name: 'Implementation', price: 'Custom', duration: 'Project', features: ['Full implementation', 'Ongoing support', 'Staff training', 'Documentation'] }
        ]
    }
};

// Show Service Details Modal
function showServiceDetails(serviceId) {
    const service = serviceDetails[serviceId];
    if (!service) return;

    let html = `
        <div class="service-header">
            <div class="service-header-icon">${service.icon}</div>
            <div class="service-header-content">
                <h2>${service.title}</h2>
                <p>${service.description}</p>
            </div>
        </div>
    `;

    // Products Section
    if (service.products) {
        html += `<div class="product-gallery">
            <h3 class="gallery-title">Our Products & Services</h3>
            <div class="products-grid">`;
        service.products.forEach(product => {
            html += `
                <div class="product-card">
                    <div class="product-icon">${product.icon}</div>
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <ul class="product-specs">
                        ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
        html += `</div></div>`;
    }

    // Features Section
    if (service.features) {
        html += `<div class="service-features">
            <h3 class="features-title">Key Features</h3>
            <div class="features-grid">`;
        service.features.forEach(feature => {
            html += `
                <div class="feature-item">
                    <div class="feature-icon">${feature.icon}</div>
                    <h4>${feature.title}</h4>
                    <p>${feature.desc}</p>
                </div>
            `;
        });
        html += `</div></div>`;
    }

    // Pricing Section
    if (service.pricing) {
        html += `<div class="service-pricing">
            <h3 class="pricing-title">Pricing Plans</h3>
            <div class="pricing-grid">`;
        service.pricing.forEach(price => {
            const isFeatured = price.featured ? 'featured' : '';
            html += `
                <div class="pricing-card ${isFeatured}">
                    ${price.featured ? '<div class="price-badge">Most Popular</div>' : ''}
                    <h3>${price.name}</h3>
                    <div class="price-amount">${price.price}</div>
                    <div class="price-duration">${price.duration}</div>
                    <ul class="pricing-features">
                        ${price.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                    <button class="pricing-btn">Get Started</button>
                </div>
            `;
        });
        html += `</div></div>`;
    }

    document.getElementById('modalBody').innerHTML = html;
    document.getElementById('serviceModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Service Details Modal
function closeServiceDetails() {
    document.getElementById('serviceModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target === modal) {
        closeServiceDetails();
    }
};

// Close modal on ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeServiceDetails();
    }
});