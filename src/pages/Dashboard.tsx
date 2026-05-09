import { motion } from 'motion/react';
import { Home, Utensils, Calendar, BarChart2, User, Plus, Droplets, Flame, TrendingUp, Info, Search } from 'lucide-react';
import { useState } from 'react';

const BottomNav = ({ active, onChange }: { active: string, onChange: (val: string) => void }) => {
  const tabs = [
    { id: 'home', icon: <Home size={24} />, label: 'خانه' },
    { id: 'foods', icon: <Utensils size={24} />, label: 'غذاها' },
    { id: 'plan', icon: <Calendar size={24} />, label: 'برنامه' },
    { id: 'reports', icon: <BarChart2 size={24} />, label: 'گزارش' },
    { id: 'profile', icon: <User size={24} />, label: 'پروفایل' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 flex items-center justify-around h-20 px-2 z-50 md:max-w-md md:mx-auto md:bottom-6 md:rounded-3xl md:shadow-2xl">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`flex flex-col items-center justify-center gap-1 w-full transition-colors ${active === tab.id ? 'text-brand-green' : 'text-slate-400'}`}
        >
          <motion.div whileTap={{ scale: 0.8 }}>
            {tab.icon}
          </motion.div>
          <span className="text-[10px] font-bold">{tab.label}</span>
          {active === tab.id && (
            <motion.div layoutId="nav-dot" className="w-1 h-1 bg-brand-green rounded-full mt-0.5" />
          )}
        </button>
      ))}
    </div>
  );
};

const CalorieProgress = () => {
  return (
    <div className="nutri-card p-8 flex flex-col items-center justify-center text-center">
       <h3 className="text-lg font-bold text-slate-500 mb-6">انرژی مصرف شده امروز</h3>
       <div className="relative w-64 h-64 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90">
             <circle 
               cx="128" cy="128" r="110" 
               className="stroke-slate-50 fill-none" 
               strokeWidth="22" 
             />
             <circle 
               cx="128" cy="128" r="110" 
               className="stroke-brand-green fill-none" 
               strokeWidth="22" 
               strokeDasharray={691}
               strokeDashoffset={691 * 0.3}
               strokeLinecap="round"
             />
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
             <span className="text-6xl font-black text-slate-800">۱۲۴۰</span>
             <span className="text-slate-400 font-medium">کالری مانده</span>
          </div>
       </div>
       
       <div className="grid grid-cols-3 w-full mt-10 gap-4">
          <div className="bg-slate-50 p-4 rounded-3xl">
             <div className="text-xs text-slate-400 mb-1">پروتئین</div>
             <div className="font-bold text-brand-green">۴۵٪</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-3xl">
             <div className="text-xs text-slate-400 mb-1">کربوهیدرات</div>
             <div className="font-bold text-brand-orange">۳۰٪</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-3xl">
             <div className="text-xs text-slate-400 mb-1">چربی</div>
             <div className="font-bold text-blue-500">۲۵٪</div>
          </div>
       </div>
    </div>
  );
};

const WaterTracker = () => {
  const [glasses, setGlasses] = useState(5);
  return (
    <div className="nutri-card bg-brand-green-dark p-8 text-white relative overflow-hidden flex flex-col justify-center">
       <div className="relative z-10">
          <h3 className="text-lg font-medium opacity-90 mb-2 font-sans">نوشیدن آب</h3>
          <div className="text-4xl font-black mb-4">{glasses} از ۸ <span className="text-xl opacity-70 font-normal">لیوان</span></div>
          <div className="flex gap-2">
             {[...Array(8)].map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setGlasses(i + 1)}
                  className={`w-8 h-10 rounded-lg transition-all ${i < glasses ? 'bg-white/30' : 'bg-white/10 border border-white/20'}`} 
                />
             ))}
          </div>
       </div>
       <div className="absolute -bottom-4 -left-4 opacity-20 transform -rotate-12">
          <Droplets size={128} fill="currentColor" stroke="none" />
       </div>
    </div>
  );
};

const WeightCard = () => {
  return (
    <div className="nutri-card p-7 flex flex-col justify-between">
       <div className="flex justify-between items-start">
          <h3 className="font-bold text-slate-700">هدف وزن</h3>
          <span className="bg-orange-100 text-brand-orange px-3 py-1 rounded-full text-xs font-bold">۴- کیلوگرم</span>
       </div>
       <div className="flex items-end gap-2 my-4">
          <span className="text-5xl font-black text-slate-800 tracking-tighter">۷۲.۵</span>
          <span className="text-slate-400 mb-2 font-bold uppercase">Kg</span>
       </div>
       <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
          <div className="bg-brand-orange h-full w-[65%]" />
       </div>
    </div>
  );
};

const SuggestedRecipe = () => {
  return (
    <div className="nutri-card p-8 flex items-center justify-between group">
       <div className="flex flex-col gap-1">
          <h3 className="text-xl font-black text-slate-800">رسپی پیشنهادی امروز</h3>
          <p className="text-slate-400">سالاد کینوا با آووکادو و مرغ گریل</p>
          <div className="flex gap-4 mt-4 text-sm font-bold text-slate-600">
             <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-brand-green rounded-full"></span> ۳۸۰ کالری</span>
             <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-brand-orange rounded-full"></span> ۲۰ دقیقه</span>
          </div>
       </div>
       <div className="w-32 h-32 bg-orange-50 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-500">
          🥗
       </div>
    </div>
  );
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">
      {/* Mobile Frame for Desktop / Full Screen for Mobile */}
      <div className="w-full h-screen md:max-w-[400px] md:h-[800px] md:rounded-[3rem] md:shadow-2xl md:border-[8px] md:border-slate-800 bg-brand-bg md:relative overflow-hidden flex flex-col">
        
        {/* Android Status Bar Mockup (Visible on desktop frame) */}
        <div className="hidden md:flex h-6 bg-slate-800 items-center justify-between px-8 text-[10px] text-white/80 font-mono">
          <span>12:45</span>
          <div className="flex gap-2">
            <span className="w-2 h-2 bg-white/20 rounded-full"></span>
            <span className="w-2 h-2 bg-white/20 rounded-full"></span>
          </div>
        </div>

        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md px-6 pt-10 pb-4 sticky top-0 z-40 border-b border-slate-50">
           <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-green p-0.5 shadow-sm">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full rounded-full" />
                 </div>
                 <div>
                    <h2 className="text-sm font-black text-slate-800 leading-tight">سلام، علی عزیز 👋</h2>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">برنامه امروز تو</p>
                 </div>
              </div>
              <button className="w-10 h-10 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-brand-green transition-colors">
                 <Plus size={20} />
              </button>
           </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto px-6 py-6 space-y-6 no-scrollbar pb-24">
          {activeTab === 'home' && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <CalorieProgress />
              <WaterTracker />
              <WeightCard />
              <SuggestedRecipe />
              
              <div className="nutri-card bg-brand-orange p-6 text-white relative overflow-hidden">
                 <h3 className="font-black text-lg mb-2">ثبت سریع وعده</h3>
                 <p className="text-xs opacity-90 mb-4">همین حالا کالری ناهار رو ثبت کن</p>
                 <button onClick={() => setActiveTab('foods')} className="bg-white text-brand-orange py-2 px-6 rounded-xl font-black text-sm">شروع ثبت</button>
                 <Utensils className="absolute -left-4 -bottom-4 opacity-10 rotate-12" size={80} />
              </div>
            </motion.div>
          )}

          {activeTab === 'foods' && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="relative">
                 <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                 <input 
                   type="text" 
                   placeholder="جستجوی غذا..." 
                   className="w-full bg-white border border-slate-100 rounded-2xl px-12 py-3 focus:ring-2 focus:ring-brand-green outline-none text-sm font-medium"
                 />
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                 {['همه', 'صبحانه', 'ناهار', 'شام'].map((cat) => (
                    <button key={cat} className="bg-white px-4 py-2 rounded-xl text-xs font-black border border-slate-100 whitespace-nowrap active:bg-brand-green active:text-white transition-colors">
                       {cat}
                    </button>
                 ))}
              </div>

              <div className="space-y-3">
                 {[
                   { name: 'نان جو سنتی', cal: 120, macro: 'P: 4g / C: 25g' },
                   { name: 'تخم مرغ آبپز', cal: 75, macro: 'P: 6g / C: 1g' },
                   { name: 'پنیر لیقوان', cal: 90, macro: 'P: 5g / C: 0g' },
                   { name: 'گردو تازه', cal: 65, macro: 'P: 2g / C: 1g' },
                   { name: 'خرما مضافتی', cal: 40, macro: 'P: 0g / C: 10g' },
                 ].map((food, i) => (
                   <div key={i} className="nutri-card !p-4 flex items-center justify-between group">
                      <div className="flex flex-col">
                         <span className="font-bold text-slate-800 text-sm mb-0.5">{food.name}</span>
                         <span className="text-[10px] text-slate-400 font-bold">{food.macro}</span>
                      </div>
                      <div className="flex items-center gap-3">
                         <span className="font-black text-brand-green text-sm">{food.cal} <span className="text-[10px]">kcal</span></span>
                         <button className="w-8 h-8 bg-slate-50 rounded-xl flex items-center justify-center text-slate-300 hover:bg-brand-green hover:text-white transition-all">
                            <Plus size={16} />
                         </button>
                      </div>
                   </div>
                 ))}
              </div>
            </motion.div>
          )}

          {/* Placeholder for other tabs (App-like feedback) */}
          {(activeTab === 'plan' || activeTab === 'reports' || activeTab === 'profile') && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
               <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-200 mb-6">
                  <Info size={40} />
               </div>
               <h3 className="text-lg font-black text-slate-800 mb-2">در حال بروزرسانی</h3>
               <p className="text-slate-400 text-xs max-w-[200px] font-bold leading-relaxed">این قابلیت به زودی در آپدیت بعدی اضافه خواهد شد.</p>
               <button onClick={() => setActiveTab('home')} className="mt-8 text-brand-green font-black text-sm">بازگشت به خانه</button>
            </motion.div>
          )}
        </main>

        {/* Bottom Navigation (Inside the Frame) */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-50 flex items-center justify-around h-20 px-2 z-50">
          {[
            { id: 'home', icon: <Home size={22} />, label: 'خانه' },
            { id: 'foods', icon: <Utensils size={22} />, label: 'غذاها' },
            { id: 'plan', icon: <Calendar size={22} />, label: 'برنامه' },
            { id: 'reports', icon: <BarChart2 size={22} />, label: 'گزارش' },
            { id: 'profile', icon: <User size={22} />, label: 'پروفایل' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 w-full transition-all duration-300 ${activeTab === tab.id ? 'text-brand-green scale-110' : 'text-slate-300 hover:text-slate-400'}`}
            >
              {tab.icon}
              <span className="text-[10px] font-black">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div layoutId="nav-glow" className="w-1.5 h-1.5 bg-brand-green rounded-full shadow-[0_0_10px_#22c55e]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
