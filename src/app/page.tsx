"use client";
import { useEffect, useRef } from "react";

function WordReveal({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("revealed"); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return <span ref={ref} className="word-reveal">{text.split(" ").map((w,i,a)=><span key={i}>{w}{i<a.length-1?" ":""}</span>)}</span>;
}

const A="#8B3A2A",B="#D4D2C9",BG="#F4F3EE",INK="#1A1A18",MU="#4A4A44",LB="#6B6B65";
const S="'Instrument Serif',Georgia,serif";
const stats=[{v:"3,100+",l:"Seniors Served"},{v:"$0",l:"Hidden Fees, Ever"},{v:"22",l:"Years in Elder Law"},{v:"100%",l:"Senior-Focused Practice"}];
const services=[
  {t:"Medicaid Planning",b:"Medicaid eligibility requires careful asset structuring — often years in advance. We help seniors legally protect assets while qualifying for long-term care benefits."},
  {t:"Special Needs Trusts",b:"A properly drafted Special Needs Trust allows a disabled beneficiary to receive an inheritance without losing SSI, Medicaid, or other means-tested benefits."},
  {t:"Guardianship & Conservatorship",b:"When a loved one can no longer manage their own affairs, we petition Florida courts for guardianship or explore less restrictive alternatives."},
  {t:"Veterans Benefits Planning",b:"Aid & Attendance and other VA benefits can help cover assisted living costs. We guide veterans and surviving spouses through the application process."},
  {t:"Elder Abuse Defense",b:"Financial exploitation of seniors is Florida's fastest-growing form of abuse. We investigate suspected exploitation and pursue recovery."},
  {t:"Incapacity Planning",b:"We draft durable powers of attorney, healthcare surrogates, and living wills that work as intended — avoiding triggers that cause financial institutions to reject them."},
];
const testimonials=[
  {q:"My mother needed Medicaid within three months of her diagnosis. The Elder Law Firm structured her assets in a way I didn't know was legal. She qualified, and kept her home.",n:"Linda T.",r:"Daughter of Client, Pinecrest"},
  {q:"They caught that our existing power of attorney was being misused by a relative. Within two weeks, the accounts were frozen and we had a new guardian appointed.",n:"The Hernandez Family",r:"Miami Lakes"},
  {q:"Dad is a Vietnam vet. The Aid & Attendance benefit they unlocked pays $2,200/month toward his assisted living. That was life-changing.",n:"Carlos V.",r:"Son of Veteran"},
];
const faqs=[
  {q:"When should elder law planning begin?",a:"Ideally, five or more years before care is needed. Medicaid has a 60-month look-back period for asset transfers. Planning early expands your options dramatically."},
  {q:"Can Medicaid take my parent's house?",a:"Through estate recovery, yes — unless planned for. A properly structured Medicaid plan can protect the family home using Lady Bird Deeds, irrevocable trusts, and spousal protections."},
  {q:"What if my parent already has dementia?",a:"Not necessarily too late. If your parent retains sufficient legal capacity, we can still execute valid documents. We assess each situation individually."},
  {q:"How do I know if my parent qualifies for VA benefits?",a:"We conduct a free initial benefits assessment. Many veterans and widows don't realize they qualify until an elder law attorney reviews their file."},
];

export default function Home() {
  return (
    <div style={{backgroundColor:BG,color:INK}}>
      <nav style={{position:"sticky",top:0,zIndex:50,backgroundColor:BG,borderBottom:`1px solid ${B}`,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1rem 3rem"}}>
        <div style={{fontFamily:S,fontSize:"1.2rem"}}>The Elder <em>Law Firm</em></div>
        <div style={{display:"flex",gap:"2rem",fontSize:"0.875rem"}}>
          {[["Services","services"],["Why Us","why"],["Stories","testimonials"],["FAQ","faq"]].map(([l,h])=><a key={l} href={`#${h}`} style={{color:INK,textDecoration:"none"}}>{l}</a>)}
        </div>
        <a href="#contact" style={{backgroundColor:A,color:BG,padding:"0.625rem 1.25rem",fontSize:"0.875rem",textDecoration:"none"}}>Free Assessment</a>
      </nav>

      <section style={{padding:"6rem 3rem 5rem",borderBottom:`1px solid ${B}`}}>
        <p style={{fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.12em",color:A,marginBottom:"1.5rem"}}>Elder Law · Medicaid · Veterans Benefits · South Florida</p>
        <h1 style={{fontFamily:S,fontSize:"clamp(2.8rem,6vw,5.5rem)",lineHeight:1.08,fontWeight:400}}>
          <WordReveal text="Protect your parents." /><br/>
          <em><WordReveal text="Not just their estate." /></em>
        </h1>
        <p style={{marginTop:"2rem",maxWidth:"36rem",fontSize:"1rem",lineHeight:1.75,color:MU}}>The Elder Law Firm specializes exclusively in the legal needs of aging Floridians and their families. One focus. 22 years of it.</p>
        <div style={{marginTop:"2.5rem",display:"flex",gap:"1rem",flexWrap:"wrap"}}>
          <a href="#contact" style={{backgroundColor:A,color:BG,padding:"0.875rem 1.75rem",fontSize:"0.875rem",textDecoration:"none"}}>Schedule a Free Assessment →</a>
          <a href="#services" style={{border:`1px solid ${B}`,color:INK,padding:"0.875rem 1.75rem",fontSize:"0.875rem",textDecoration:"none"}}>What We Handle</a>
        </div>
      </section>

      <section style={{padding:"4rem 3rem",borderBottom:`1px solid ${B}`}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",border:`1px solid ${B}`,borderRight:"none",borderBottom:"none"}}>
          {stats.map(s=>(
            <div key={s.v} style={{padding:"2rem",borderRight:`1px solid ${B}`,borderBottom:`1px solid ${B}`}}>
              <div className="metric" style={{fontSize:"clamp(2rem,4vw,3rem)",color:A,marginBottom:"0.5rem"}}>{s.v}</div>
              <div style={{fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.1em",color:LB}}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" style={{padding:"5rem 3rem",borderBottom:`1px solid ${B}`}}>
        <div style={{marginBottom:"3.5rem"}}>
          <p style={{fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.12em",color:LB,marginBottom:"1rem"}}>Practice Areas</p>
          <h2 style={{fontFamily:S,fontSize:"clamp(2rem,4vw,3.5rem)",fontWeight:400,lineHeight:1.12}}>The full spectrum of<br/><em>elder law.</em></h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",border:`1px solid ${B}`,borderRight:"none",borderBottom:"none"}}>
          {services.map(s=>(
            <div key={s.t} style={{padding:"2rem",borderRight:`1px solid ${B}`,borderBottom:`1px solid ${B}`}}>
              <h3 style={{fontFamily:S,fontSize:"1.3rem",fontWeight:400,marginBottom:"0.75rem"}}>{s.t}</h3>
              <p style={{fontSize:"0.875rem",lineHeight:1.75,color:MU}}>{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="why" style={{padding:"5rem 3rem",borderBottom:`1px solid ${B}`,backgroundColor:"#EFEDE6"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem"}}>
          <div>
            <p style={{fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.12em",color:LB,marginBottom:"1rem"}}>Why Families Choose Us</p>
            <h2 style={{fontFamily:S,fontSize:"clamp(1.8rem,3.5vw,3rem)",fontWeight:400,lineHeight:1.15}}>Elder law is all we do.<br/><em>That&apos;s what makes us different.</em></h2>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"1.5rem"}}>
            {[
              {h:"We don't do divorces, car accidents, or criminal defense.",b:"General practice attorneys sometimes offer elder law as a side practice. We've spent 22 years exclusively on the intersection of aging, disability, and law."},
              {h:"We work on flat fees, not hourly.",b:"Seniors and their families shouldn't be watching a clock. We quote a flat fee upfront — no billing surprises, no disincentive to ask questions."},
              {h:"We come to you when needed.",b:"For homebound or memory-impaired clients, we offer in-home and facility visits throughout Miami-Dade and Broward."},
            ].map(item=>(
              <div key={item.h} style={{padding:"1.5rem",backgroundColor:BG,borderLeft:`3px solid ${A}`}}>
                <p style={{fontWeight:500,marginBottom:"0.5rem",fontSize:"0.9rem"}}>{item.h}</p>
                <p style={{fontSize:"0.875rem",lineHeight:1.75,color:MU}}>{item.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" style={{padding:"5rem 3rem",borderBottom:`1px solid ${B}`}}>
        <p style={{fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.12em",color:LB,marginBottom:"3rem"}}>Family Stories</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",border:`1px solid ${B}`,borderRight:"none",borderBottom:"none"}}>
          {testimonials.map(t=>(
            <div key={t.n} style={{padding:"2rem",borderRight:`1px solid ${B}`,borderBottom:`1px solid ${B}`}}>
              <p style={{fontFamily:S,fontStyle:"italic",fontSize:"1rem",lineHeight:1.75,marginBottom:"1.5rem"}}>&ldquo;{t.q}&rdquo;</p>
              <p style={{fontSize:"0.875rem",fontWeight:500}}>{t.n}</p>
              <p style={{fontSize:"0.75rem",color:LB,marginTop:"0.25rem"}}>{t.r}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" style={{padding:"5rem 3rem",borderBottom:`1px solid ${B}`}}>
        <p style={{fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.12em",color:LB,marginBottom:"3rem"}}>Your Questions</p>
        <div style={{maxWidth:"48rem"}}>
          {faqs.map((f,i)=>(
            <div key={i} style={{padding:"1.75rem 0",borderBottom:`1px solid ${B}`}}>
              <p style={{fontFamily:S,fontSize:"1.1rem",fontWeight:400,marginBottom:"0.5rem"}}>{f.q}</p>
              <p style={{fontSize:"0.875rem",lineHeight:1.75,color:MU}}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{padding:"6rem 3rem",backgroundColor:A,textAlign:"center"}}>
        <div style={{maxWidth:"40rem",margin:"0 auto",color:BG}}>
          <h2 style={{fontFamily:S,fontSize:"clamp(2rem,4vw,3.5rem)",fontWeight:400,lineHeight:1.1}}>Your family&apos;s situation<br/><em>is unique. So is our advice.</em></h2>
          <p style={{marginTop:"1.5rem",fontSize:"0.875rem",lineHeight:1.75,opacity:0.8}}>Every free assessment is handled by a licensed attorney — not a paralegal. Real answers, not a sales pitch.</p>
          <div style={{marginTop:"2.5rem",display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"}}>
            <a href="tel:+13055550348" style={{backgroundColor:BG,color:A,padding:"0.875rem 1.75rem",fontSize:"0.875rem",textDecoration:"none",fontWeight:500}}>(305) 555-0348</a>
            <a href="mailto:intake@elderlaw.miami" style={{border:"1px solid rgba(244,243,238,0.4)",color:BG,padding:"0.875rem 1.75rem",fontSize:"0.875rem",textDecoration:"none"}}>intake@elderlaw.miami</a>
          </div>
          <p style={{marginTop:"2rem",fontSize:"0.7rem",opacity:0.5}}>Home visits available · Bilingual EN/ES · Miami-Dade &amp; Broward</p>
        </div>
      </section>

      <footer style={{padding:"2rem 3rem",borderTop:`1px solid ${B}`,display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.75rem",color:LB}}>
        <div style={{fontFamily:S,fontSize:"1rem",color:INK}}>The Elder <em>Law Firm</em></div>
        <p>© 2026 The Elder Law Firm, P.A. · Florida Bar · Attorney Advertising</p>
        <p>Miami-Dade · Broward</p>
      </footer>
    </div>
  );
}
