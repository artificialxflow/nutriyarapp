import { motion } from 'motion/react';
import { Apple, Heart, Activity, Search, User, Menu, X, ChevronRight, Calculator, Utensils, Droplets, Target } from 'lucide-react';

const Header = ({ onNavigate }: { onNavigate: (page: any) => void }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('landing')}>
          <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center text-white">
            <Apple size={24} fill="currentColor" />
          </div>
          <span className="text-2xl font-black text-brand-green-dark tracking-tight">رژیمیار <span className="text-slate-300 font-light mx-1">|</span> NutriYar</span>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <button onClick={() => onNavigate('landing')} className="text-slate-500 hover:text-brand-green font-bold transition-colors">خانه</button>
          <button className="text-slate-500 hover:text-brand-green font-bold transition-colors">قابلیت‌ها</button>
          <button className="text-slate-500 hover:text-brand-green font-bold transition-colors">رسپی‌ها</button>
          <button className="text-slate-500 hover:text-brand-green font-bold transition-colors">درباره ما</button>
        </nav>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="hidden sm:block text-slate-500 font-black px-4 py-2 hover:text-brand-green transition-colors"
          >
            ورود کاربر
          </button>
          <button 
            onClick={() => onNavigate('dashboard')}
            className="nutri-button-primary !py-3 !px-8"
          >
            شروع رایگان
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero = ({ onStart }: { onStart: () => void }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target size={16} />
            برنامه هوشمند برای زندگی سالم‌تر
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
            با <span className="text-brand-green">رژیمیار</span>، هوشمندانه غذا بخور و کالری بسوزان
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            رژیمیار همراه همیشگی شما در مسیر تناسب اندام است. با ثبت کالری، مدیریت وزن و دسترسی به صدها رسپی سالم، زودتر از همیشه به هدف‌تان برسید.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={onStart} className="nutri-button-primary text-lg px-8 py-4"> همین حالا شروع کنید </button>
            <button className="bg-white border border-slate-200 text-slate-700 font-bold px-8 py-4 rounded-2xl hover:bg-slate-50 transition-colors">
              مشاهده دمو
            </button>
          </div>
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3 rtl:space-x-reverse">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                </div>
              ))}
            </div>
            <div className="text-sm text-slate-500">
               بیش از <span className="font-bold text-slate-900">+۱۰ هزار</span> کاربر فعال
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl skew-y-1">
             <img 
               referrerPolicy="no-referrer"
               src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800" 
               alt="Healthy Food" 
               className="w-full h-auto"
             />
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-orange rounded-full animate-pulse blur-3xl opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-green rounded-full animate-pulse blur-3xl opacity-20"></div>
          
          {/* Floating Widget Mockup */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -right-8 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-slate-100"
          >
            <div className="w-10 h-10 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center">
              <Activity size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">کالری مصرفی</p>
              <p className="text-sm font-bold text-slate-800">۱,۸۴۰ kcal</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { title: 'ثبت کالری هوشمند', desc: 'با چند کلیلک ساده تمام وعده‌های غذایی خود را ثبت کنید.', icon: <Calculator />, color: 'bg-blue-500', size: 'lg:col-span-2' },
    { title: 'مدیریت وزن', desc: 'نمودار رشد و کاهش وزن خود را مشاهده کنید.', icon: <Target />, color: 'bg-green-500', size: 'lg:col-span-1' },
    { title: 'رسپی‌های سالم', desc: 'دسترسی به صدها دستور پخت غذاهای رژیمی.', icon: <Utensils />, color: 'bg-orange-500', size: 'lg:col-span-1' },
    { title: 'ثبت آب مصرفی', desc: 'هدف روزانه خود را برای نوشیدن آب تنظیم کنید.', icon: <Droplets />, color: 'bg-cyan-500', size: 'lg:col-span-1' },
    { title: 'گزارش‌های دوره‌ای', desc: 'دریافت گزارش‌های هفتگی از پیشرفت شما.', icon: <Heart />, color: 'bg-red-500', size: 'lg:col-span-1' },
  ];

  return (
    <section className="py-24 bg-slate-50/50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 underline decoration-brand-green/30 decoration-8 underline-offset-8">قابلیت‌های هوشمند</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">رژیمیار تمامی ابزارهای لازم برای رسیدن به وزن ایده‌آل را در یک اپلیکیشن برای شما جمع‌آوری کرده است.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className={`nutri-card group ${f.size || ''}`}
            >
              <div className={`w-16 h-16 ${f.color} text-white rounded-[2rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-${f.color.split('-')[1]}-500/20`}>
                {f.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
         <h2 className="text-3xl font-bold text-center mb-16">داستان موفقیت کاربران ما</h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="nutri-card bg-slate-50 border-none p-8 relative">
                <div className="absolute top-8 left-8 text-slate-200">
                  <Heart size={48} fill="currentColor" />
                </div>
                <p className="text-slate-600 mb-8 relative z-10 leading-relaxed italic">
                  "از وقتی از رژیمیار استفاده می‌کنم، مدیریت وزنم خیلی راحت‌تر شده. رسپی‌های جدید و خوشمزه باعث شده از رژیم گرفتن لذت ببرم."
                </p>
                <div className="flex items-center gap-4">
                   <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="User" className="w-12 h-12 rounded-full" />
                   <div>
                     <p className="font-bold text-slate-900">سارا محمدی</p>
                     <p className="text-sm text-slate-500">کاهش ۵ کیلوگرم در ۲ ماه</p>
                   </div>
                </div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
}

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center text-white">
              <Apple size={20} />
            </div>
            <span className="font-bold text-xl text-white">رژیمیار</span>
          </div>
          <p className="max-w-sm mb-8 leading-relaxed">
            رژیمیار همراه هوشمند شما در دنیای تغذیه. ما به شما کمک می‌کنیم تا بدنی سالم‌تر و ذهنی شاداب‌تر داشته باشید.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">لینک‌های سریع</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-brand-green transition-colors">خانه</a></li>
            <li><a href="#" className="hover:text-brand-green transition-colors">برنامه‌ها</a></li>
            <li><a href="#" className="hover:text-brand-green transition-colors">رسپی‌ها</a></li>
            <li><a href="#" className="hover:text-brand-green transition-colors">بلاگ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">تماس با ما</h4>
          <ul className="space-y-4">
            <li>ایمیل: info@nutriyar.ir</li>
            <li>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</li>
            <li className="flex gap-4 mt-6">
               <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-green transition-colors cursor-pointer">
                 <Activity size={20} />
               </div>
               <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-green transition-colors cursor-pointer">
                 <Target size={20} />
               </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 flex flex-col md:row items-center justify-between gap-4">
        <p className="text-sm">© ۲۰۲۶ تمامی حقوق برای رژیمیار محفوظ است.</p>
        <p className="text-sm">طراحی شده با ❤️ برای سلامتی شما</p>
      </div>
    </footer>
  );
};

export default function LandingPage({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen">
      <Header onNavigate={(page) => page === 'dashboard' ? onStart() : null} />
      <main>
        <Hero onStart={onStart} />
        <Features />
        
        {/* How it Works */}
        <section className="py-24 px-4 bg-white relative overflow-hidden">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold mb-4">نحوه کار رژیمیار</h2>
                 <p className="text-slate-600">فقط در ۳ مرحله به وزن ایده‌آل خود برسید</p>
              </div>
              <div className="grid md:grid-cols-3 gap-12">
                 {[
                   { step: '۰۱', title: 'ثبت اطلاعات', desc: 'مشخصات بدنی و هدف خود را وارد کنید تا برنامه اختصاصی شما ساخته شود.' },
                   { step: '۰۲', title: 'ثبت روزانه', desc: 'وعده‌های غذایی و فعالیت‌های خود را در طول روز به صورت ساده ثبت کنید.' },
                   { step: '۰۳', title: 'مشاهده پیشرفت', desc: 'با تحلیل‌های هوشمند رژیمیار، هر روز به هدف خود نزدیک‌تر شوید.' },
                 ].map((s, i) => (
                   <div key={i} className="text-center relative group">
                      <div className="text-6xl font-black text-slate-100 group-hover:text-brand-green/10 transition-colors mb-4">{s.step}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 relative -mt-8">{s.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{s.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Popular Recipes Preview */}
        <section className="py-24 px-4 bg-white">
           <div className="max-w-7xl mx-auto">
             <div className="flex items-center justify-between mb-12">
               <h2 className="text-3xl font-bold">رسپی‌های محبوب هفته</h2>
               <button className="text-brand-green font-bold flex items-center gap-1 group">
                 مشاهده همه <ChevronRight size={20} className="group-hover:translate-x-[-4px] transition-transform" />
               </button>
             </div>
             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'سالاد کینوآ با آووکادو', cal: 320, time: '۱۵ دقیقه', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400' },
                  { title: 'اوتمیل موزی با دارچین', cal: 280, time: '۱۰ دقیقه', img: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=400' },
                  { title: 'مرغ گریل شده با رزماری', cal: 450, time: '۲۵ دقیقه', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=400' },
                  { title: 'اسموتی اسفناج و آناناس', cal: 190, time: '۵ دقیقه', img: 'https://images.unsplash.com/photo-1610970882799-64a369345c84?auto=format&fit=crop&q=80&w=400' },
                ].map((item, i) => (
                  <motion.div key={i} whileHover={{ y: -8 }} className="nutri-card p-0 overflow-hidden group">
                     <div className="relative h-48">
                        <img referrerPolicy="no-referrer" src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-slate-800">
                          {item.cal} kcal
                        </div>
                     </div>
                     <div className="p-4">
                        <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                        <div className="flex items-center gap-3 text-sm text-slate-500">
                           <span className="flex items-center gap-1"><Activity size={14} />{item.time}</span>
                           <span className="flex items-center gap-1"><Heart size={14} /> محبوب</span>
                        </div>
                     </div>
                  </motion.div>
                ))}
             </div>
           </div>
        </section>

        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
