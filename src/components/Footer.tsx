import React from 'react';
import { MessageCircle, Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2d2d2d] text-white">
      {/* Newsletter Section */}
      {/* <div className="bg-[#1a1a1a] py-6 flex justify-between items-center"> */}
        <div className="bg-[#1a1a1a] py-6 flex justify-between items-center max-w-[1400px] mx-auto px-8">
{/* logo */}
 <svg className="h-7 mb-5" viewBox="0 0 100 25" fill="none">
              <text x="0" y="18" fill="white" fontSize="18" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="1">
                DAMAC
              </text>
            </svg>
            
       

  {/*  Social */}
           

          <div>
            <div className="flex gap-2.5">
              <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors">
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors">
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

           {/* input */}
        <div className="max-w-[1400px] px-8">
          <div className="flex items-center justify-between ">
           
            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-b border-gray-600 focus:border-white outline-none px-0 py-1 w-[400px] text-white placeholder-gray-500 text-sm"
              />
              <button className="bg-white text-black px-7 py-1.5 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors uppercase tracking-wide">
                Submit
              </button>
            </div>

          </div>
          <p className="text-[11px] text-gray-500 mt-2">
            By signing up you accept our{' '}
            <a href="#" className="underline hover:text-white">
              terms and conditions
            </a>
          </p>
        </div>

        </div>
<hr />
      {/* </div> */}
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-8 py-10 ">
      

        {/* Links Grid */}
        <div className="grid grid-cols-5 gap-8">
          {/* Column 1: WHY DAMAC */}
          <div>
            <h4 className="text-[11px] font-bold mb-4 tracking-widest uppercase">Why Damac</h4>
            <ul className="space-y-2.5 text-[13px] text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About DAMAC</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Founder's Message</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investor relations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Building Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Whistleblower line</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ESG</a></li>
            </ul>
            <h4 className="text-[11px] font-bold mb-4 mt-8 tracking-widest uppercase">Damac Assist</h4>
            <ul className="space-y-2.5 text-[13px] text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Mortgage Assist</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Agents Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mortgage Calculator</a></li>
            </ul>
          </div>

          {/* Column 2: COMMUNITIES */}
          <div>
            <h4 className="text-[11px] font-bold mb-4 tracking-widest uppercase">Communities</h4>
            <ul className="space-y-2.5 text-[13px] text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">DAMAC Islands</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DAMAC Hills</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DAMAC Hills 2</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DAMAC Sun City</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DAMAC Lagoons</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DAMAC Riverside</a></li>
            </ul>
            <h4 className="text-[11px] font-bold mb-4 mt-8 tracking-widest uppercase">Popular Areas</h4>
            <ul className="space-y-2.5 text-[13px] text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Villas for sale in DAMAC Hills</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Villas for sale in DAMAC Lagoons</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Properties for sale in DAMAC Hills 2</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apartments for sale in Cavalli Tower</a></li>
            </ul>
          </div>

          {/* Column 3: TOP SEARCHED PRODUCTS */}
          <div>
            <h4 className="text-[11px] font-bold mb-4 tracking-widest uppercase">Top Searched Products</h4>
            <ul className="space-y-2.5 text-[13px] text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Golf Gate 2</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DAMAC Casa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Riverside Views</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Canal Heights 2</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DAMAC Lagoons Ibiza</a></li>
            </ul>
            <h4 className="text-[11px] font-bold mb-4 mt-8 tracking-widest uppercase">Recent Searches</h4>
            <ul className="space-y-2.5 text-[13px] text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Villas for sale in Dubai</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apartment for sale in Dubai</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Townhouses for sale in Dubai</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Properties for sale in Dubai</a></li>
              <li><a href="#" className="hover:text-white transition-colors">3 bedroom villa for sale in Dubai</a></li>
            </ul>
          </div>

          {/* Column 4: FEATURED PROJECTS */}
          <div>
            <h4 className="text-[11px] font-bold mb-4 tracking-widest uppercase">Featured Projects</h4>
            <ul className="space-y-2.5 text-[13px] text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">DAMAC Islands 2</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safa Gate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Couture by Cavalli</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chelsea Residences</a></li>
            </ul>
          </div>

          {/* Column 5: HOSPITALITY */}
          <div>
            <h4 className="text-[11px] font-bold mb-4 tracking-widest uppercase">Hospitality</h4>
            <ul className="space-y-2.5 text-[13px] text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Paramount Hotel Dubai</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Paramount Hotel Midtown</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DAMAC Maison obstruction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DAMAC Maison One Jardia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DAMAC Maison Canal Views</a></li>
            </ul>
            <div className="mt-10">
              <div className="mb-4">
                <div className="text-lg font-bold tracking-wide">DAMAC</div>
                <div className="text-2xl font-serif italic text-[#c8a876]">living</div>
              </div>
              <div className="flex gap-2">
                <a href="#" className="inline-block">
                  <div className="bg-black rounded-md px-3 py-1.5 text-[10px] border border-gray-700">
                    <div className="text-white">Download on the</div>
                    <div className="text-white font-semibold text-sm">App Store</div>
                  </div>
                </a>
                <a href="#" className="inline-block">
                  <div className="bg-black rounded-md px-3 py-1.5 text-[10px] border border-gray-700">
                    <div className="text-white">GET IT ON</div>
                    <div className="text-white font-semibold text-sm">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
<hr />

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-[1400px] mx-auto px-8 py-5">
          <div className="flex justify-between items-center text-[11px] text-gray-500">
            <div className="flex gap-5">
              <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Corporate Communications Policy</a>
            </div>
            <div>
              © 2025 DAMAC Properties. All Rights Reserved (v4.4.0)
            </div>
          </div>
        </div>
      </div>

      {/* Windows Activation Watermark */}
      <div className="fixed bottom-3 right-3 text-white/30 text-[11px] leading-tight">
        <p>Activate Windows</p>
        <p>Go to Settings to activate Windows.</p>
      </div>
    </footer>
  );
};

export default Footer;