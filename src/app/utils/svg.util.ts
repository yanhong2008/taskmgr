import{ MdIconRegistry} from '@angular/material';
import{DomSanitizer} from '@angular/platform-browser';

export const loadSvgResources=(iconRegistry:MdIconRegistry,domSanitizer:DomSanitizer) =>{
    const imgDir='assets/img';
    const sidebarDir=`${imgDir}/sidebar`;
    const dayDir=`${imgDir}/days`;

    iconRegistry.addSvgIcon('gifts',domSanitizer.bypassSecurityTrustResourceUrl(`${imgDir}/fight.svg`));

    iconRegistry.addSvgIcon('project',domSanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/project.svg`));
    iconRegistry.addSvgIcon('month',domSanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/month.svg`));
    iconRegistry.addSvgIcon('week',domSanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/week.svg`));
    iconRegistry.addSvgIcon('day',domSanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/day.svg`));

    const days=[];
    for(let i=1;i<=31;i++){
        days.push(i);
    }
    days.forEach(p=>{
        iconRegistry.addSvgIcon(`day${p}`,domSanitizer.bypassSecurityTrustResourceUrl(`${dayDir}/day${p}`));
    });
}
