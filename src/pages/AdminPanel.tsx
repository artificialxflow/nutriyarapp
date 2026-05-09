import { motion } from 'motion/react';
import { LayoutDashboard, Users, UtensilsCrossed, BarChart, Settings, LogOut, ChevronLeft, Search, Bell, Download } from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
  const menuItems = [
    { id: 'dash', icon: <LayoutDashboard size={20} />, label: 'داشبورد مدیریت' },
    { id: 'users', icon: <Users size={20} />, label: 'مدیریت کاربران' },
    { id: 'foods', icon: <UtensilsCrossed size={20} />, label: 'بانک غذاها' },
    { id: 'stats', icon: <BarChart size={20} />, label: 'آمار و گزارش‌ها' },
    { id: 'settings', icon: <Settings size={20} />, label: 'تنظیمات سیستم' },
  ];

  return (
    <aside className="w-72 bg-slate-900 min-h-screen p-6 hidden lg:flex flex-col">
       <div className="flex items-center gap-3 mb-10 text-white">
          <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center">
             <LayoutDashboard size={18} />
          </div>
          <span className="font-black text-xl tracking-tight">پنل مدیریت</span>
       </div>

       <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
             <button 
               key={item.id}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.id === 'dash' ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
             >
                {item.icon}
                <span className="font-medium">{item.label}</span>
             </button>
          ))}
       </nav>

       <button className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all">
          <LogOut size={20} />
          <span className="font-medium">خروج از سیستم</span>
       </button>
    </aside>
  );
};

export default function AdminPanel() {
  return (
    <div className="flex min-h-screen bg-brand-bg">
      <Sidebar />
      
      <main className="flex-1 p-10">
         {/* Top Bar */}
         <header className="flex items-center justify-between mb-12">
            <div>
               <h1 className="text-3xl font-black text-slate-800 mb-2">داشبورد مدیریت</h1>
               <p className="text-slate-500 font-medium italic">مدیریت هوشمند پلتفرم رژیمیار</p>
            </div>
            <div className="flex items-center gap-6">
               <div className="relative group">
                  <Search size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-green transition-colors" />
                  <input type="text" placeholder="جستجو در سیستم..." className="bg-white border border-slate-100 rounded-2xl pr-12 pl-6 py-3 w-80 shadow-sm focus:ring-4 focus:ring-brand-green/10 outline-none transition-all font-medium" />
               </div>
               <button className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-500 shadow-sm relative border border-slate-100 hover:bg-slate-50 transition-colors">
                  <Bell size={24} />
                  <span className="absolute top-3 left-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-sm"></span>
               </button>
               <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-slate-100">
                  <img src="https://i.pravatar.cc/100?u=admin" alt="Admin" className="w-10 h-10 rounded-xl" />
                  <div className="flex flex-col">
                    <span className="text-sm font-black text-slate-700 leading-tight">مدیر سیستم</span>
                    <span className="text-[10px] font-bold text-brand-green">سطح دسترسی کل</span>
                  </div>
                  <ChevronLeft size={16} className="text-slate-400 mr-2" />
               </div>
            </div>
         </header>

         {/* Stats Cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { label: 'کاربران فعال', val: '۱۲,۴۵۰', trend: '+۱۲٪', icon: <Users className="text-blue-500" />, color: 'bg-blue-50' },
              { label: 'گزارش‌های امروز', val: '۳,۸۹۰', trend: '+۵٪', icon: <BarChart className="text-purple-500" />, color: 'bg-purple-50' },
              { label: 'رسپی‌های جدید', val: '۴۲', trend: '+۸٪', icon: <UtensilsCrossed className="text-orange-500" />, color: 'bg-orange-50' },
              { label: 'رضایت کاربران', val: '۹۸.۴٪', trend: '+۱٪', icon: <LayoutDashboard className="text-brand-green" />, color: 'bg-green-50' },
            ].map((stat, i) => (
              <div key={i} className="nutri-card hover:translate-y-[-4px]">
                 <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center`}>
                       {stat.icon}
                    </div>
                    <span className="text-xs font-black text-brand-green-dark bg-green-50 px-3 py-1.5 rounded-full shadow-sm">{stat.trend}</span>
                 </div>
                 <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">{stat.label}</p>
                 <h3 className="text-3xl font-black text-slate-800 tracking-tight">{stat.val}</h3>
              </div>
            ))}
         </div>

         <div className="grid lg:grid-cols-12 gap-8">
            {/* Table Section */}
            <div className="lg:col-span-8 nutri-card p-0 overflow-hidden">
               <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-white/50 backdrop-blur-sm">
                  <h3 className="font-black text-xl text-slate-800">آخرین کاربران ثبت‌نامی</h3>
                  <button className="text-slate-500 hover:text-brand-green text-sm font-black flex items-center gap-2 transition-colors">
                     <Download size={18} /> خروجی اکسل
                  </button>
               </div>
               <div className="overflow-x-auto">
                 <table className="w-full text-right">
                    <thead>
                       <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                          <th className="px-8 py-5">اطلاعات کاربر</th>
                          <th className="px-8 py-5">تاریخ عضویت</th>
                          <th className="px-8 py-5">وضعیت اشتراک</th>
                          <th className="px-8 py-5 text-left">عملیات</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                       {[1, 2, 3, 4, 5, 6].map((i) => (
                          <tr key={i} className="hover:bg-slate-50 transition-colors group">
                             <td className="px-8 py-5">
                                <div className="flex items-center gap-4">
                                   <img src={`https://i.pravatar.cc/100?u=${i+20}`} className="w-10 h-10 rounded-2xl border-2 border-white shadow-sm" />
                                   <div className="flex flex-col">
                                      <span className="text-sm font-black text-slate-700">علی رضایی شماره {i}</span>
                                      <span className="text-[10px] font-bold text-slate-400">ali.user${i}@nutriyar.ir</span>
                                   </div>
                                </div>
                             </td>
                             <td className="px-8 py-5 text-sm font-bold text-slate-500 italic">۱۴۰۳/۰۲/{10+i}</td>
                             <td className="px-8 py-5">
                                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black ${i % 3 === 0 ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-700'}`}>
                                  {i % 3 === 0 ? 'منقضی شده' : 'حرفه ای'}
                                </span>
                             </td>
                             <td className="px-8 py-5 text-left">
                                <button className="text-slate-400 hover:text-brand-green font-black text-xs transition-colors py-2 px-4 rounded-xl hover:bg-brand-green/5">جزئیات</button>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
               </div>
            </div>

            {/* Notifications / Right Section */}
            <div className="lg:col-span-4 nutri-card p-8">
               <h3 className="font-black text-xl text-slate-800 mb-8">گزارشات سیستمی</h3>
               <div className="space-y-10">
                  {[
                    { text: 'ثبت رسپی جدید "جوجه ترش"', time: '۱۰ دقیقه پیش', color: 'bg-orange-500' },
                    { text: 'بروزرسانی ماکروهای دیتابیس', time: '۲ ساعت پیش', color: 'bg-blue-500' },
                    { text: 'تیکت پشتیبانی جدید (فوری)', time: '۴ ساعت پیش', color: 'bg-red-500' },
                    { text: 'بهینه‌سازی لود تصاویر سرور', time: 'امروز ۱۱:۳۰', color: 'bg-brand-green' },
                  ].map((notif, i) => (
                    <div key={i} className="flex gap-6 relative">
                       {i < 3 && <div className="absolute top-8 right-[11px] w-[2px] h-10 bg-slate-100"></div>}
                       <div className="flex flex-col items-center">
                          <div className={`w-6 h-6 rounded-lg ${notif.color} border-4 border-white shadow-sm z-10`}></div>
                       </div>
                       <div className="flex-1">
                          <p className="text-sm font-black text-slate-700 mb-1 leading-relaxed">{notif.text}</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{notif.time}</p>
                       </div>
                    </div>
                  ))}
               </div>
               <button className="w-full mt-12 py-4 bg-slate-800 text-white font-black rounded-2xl hover:bg-slate-900 transition-all shadow-xl shadow-slate-900/10 active:scale-95">
                  مشاهده لاگ سیستم
               </button>
            </div>
         </div>
      </main>
    </div>
  );
}
