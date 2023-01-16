import { useState, useEffect } from 'react';


function HeroTitle() {

    let skillList = [
        'HTML',
        'CSS',
    
        'JS',
        'NODEJS',
        'EXPRESS',
        'REACT',
        'NEXTJS',
        'TESTCAFÉ',
    
        'PHP',
        'LARAVEL',
    
        'SQL',
        'MONGO',
    
        'GIT',
        'CI/CD',
        'DOCKER',
        'API',
        'SONARQUBE',
      ];
    
      let [skillIndex, setSkillIndex] = useState(0);
    
      let [oldTransparent, setOldTransparent] = useState(false);
      let [newTransparent, setNewTransparent] = useState(true);
    
      let [oldCollapsed, setOldCollapsed] = useState(false);
    
      let [oldTransition, setOldTransition] = useState(true);
      let [newTransition, setNewTransition] = useState(true);
    
      let [mobileOldTransparent, setMobileOldTransparent] = useState(false);
      let [mobileNewTransparent, setMobileNewTransparent] = useState(true);
    
      useEffect(() => {
        const intervalAnimation = setInterval(() => {
          setOldTransparent(true);
          setNewTransparent(false);
          setOldCollapsed(true);
    
          setMobileNewTransparent(false);
          setMobileOldTransparent(true);
    
          setTimeout(() => {
            setOldTransparent(false);
            setNewTransparent(true);
            setOldCollapsed(false);
          }, 2000);
    
          setTimeout(() => {
            setOldTransition(false);
            setNewTransition(false);
    
            setMobileNewTransparent(true);
            setMobileOldTransparent(false);
    
            if (skillIndex + 1 === skillList.length) {
              setSkillIndex(0);
            } else {
              setSkillIndex(skillIndex + 1);
            }
          }, 2000);
    
          setNewTransition(true);
          setOldTransition(true);
        }, 3000);
    
        return () => {
          clearInterval(intervalAnimation);
        };
      });

    return (
        <div className='flex  pt-16'>
            <div className='flex flex-col lg:flex-row font-bold text-5xl xs:text-6xl lg:text-7xl'>
                <div className='w-full'>WEB<br />DEVELOPER</div>

                <div className='hidden lg:flex lg:flex-col ml-2 mt-auto'>
                    <span id="skill-hero-new" style={{ transition: (newTransition ? "2s" : "0s") }} className={'font-medium text-6xl mt-auto' + (newTransparent ? ' text-transparent' : '')}>{skillIndex + 1 >= skillList.length ? skillList[0] : skillList[skillIndex + 1]}</span>
                    <span id="skill-hero-old" style={{ transition: (oldTransition ? "2s" : "0s"), height: oldCollapsed ? "0px" : "60px" }} className={'mt-auto relative font-medium text-6xl' + (oldTransparent ? ' text-transparent' : '')}>{skillList[skillIndex]}</span>
                </div>

                <div className='flex lg:hidden font-medium text-4xl xs:text-5xl mb-16'>
                    <span id="skill-hero-new-mobile" style={{ transition: (newTransition ? "2s" : "0s") }} className={'absolute' + (mobileNewTransparent ? ' text-transparent' : '')}>{skillIndex + 1 >= skillList.length ? skillList[0] : skillList[skillIndex + 1]}</span>
                    <span id="skill-hero-old-mobile" style={{ transition: (oldTransition ? "2s" : "0s") }} className={'absolute' + (mobileOldTransparent ? ' text-transparent' : '')}>{skillList[skillIndex]}</span>
                </div>
            </div>
        </div>
    );
}

export default HeroTitle;