(()=>{var A=function(c,d){var l=document.querySelector("#"+c+" > .particles-js-canvas-el");this.pJS={canvas:{el:l,w:l.offsetWidth,h:l.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var e=this.pJS;d&&Object.deepExtend(e,d),e.tmp.obj={size_value:e.particles.size.value,size_anim_speed:e.particles.size.anim.speed,move_speed:e.particles.move.speed,line_linked_distance:e.particles.line_linked.distance,line_linked_width:e.particles.line_linked.width,mode_grab_distance:e.interactivity.modes.grab.distance,mode_bubble_distance:e.interactivity.modes.bubble.distance,mode_bubble_size:e.interactivity.modes.bubble.size,mode_repulse_distance:e.interactivity.modes.repulse.distance},e.fn.retinaInit=function(){e.retina_detect&&window.devicePixelRatio>1?(e.canvas.pxratio=window.devicePixelRatio,e.tmp.retina=!0):(e.canvas.pxratio=1,e.tmp.retina=!1),e.canvas.w=e.canvas.el.offsetWidth*e.canvas.pxratio,e.canvas.h=e.canvas.el.offsetHeight*e.canvas.pxratio,e.particles.size.value=e.tmp.obj.size_value*e.canvas.pxratio,e.particles.size.anim.speed=e.tmp.obj.size_anim_speed*e.canvas.pxratio,e.particles.move.speed=e.tmp.obj.move_speed*e.canvas.pxratio,e.particles.line_linked.distance=e.tmp.obj.line_linked_distance*e.canvas.pxratio,e.interactivity.modes.grab.distance=e.tmp.obj.mode_grab_distance*e.canvas.pxratio,e.interactivity.modes.bubble.distance=e.tmp.obj.mode_bubble_distance*e.canvas.pxratio,e.particles.line_linked.width=e.tmp.obj.line_linked_width*e.canvas.pxratio,e.interactivity.modes.bubble.size=e.tmp.obj.mode_bubble_size*e.canvas.pxratio,e.interactivity.modes.repulse.distance=e.tmp.obj.mode_repulse_distance*e.canvas.pxratio},e.fn.canvasInit=function(){e.canvas.ctx=e.canvas.el.getContext("2d")},e.fn.canvasSize=function(){e.canvas.el.width=e.canvas.w,e.canvas.el.height=e.canvas.h,e&&e.interactivity.events.resize&&window.addEventListener("resize",function(){e.canvas.w=e.canvas.el.offsetWidth,e.canvas.h=e.canvas.el.offsetHeight,e.tmp.retina&&(e.canvas.w*=e.canvas.pxratio,e.canvas.h*=e.canvas.pxratio),e.canvas.el.width=e.canvas.w,e.canvas.el.height=e.canvas.h,e.particles.move.enable||(e.fn.particlesEmpty(),e.fn.particlesCreate(),e.fn.particlesDraw(),e.fn.vendors.densityAutoParticles()),e.fn.vendors.densityAutoParticles()})},e.fn.canvasPaint=function(){e.canvas.ctx.fillRect(0,0,e.canvas.w,e.canvas.h)},e.fn.canvasClear=function(){e.canvas.ctx.clearRect(0,0,e.canvas.w,e.canvas.h)},e.fn.particle=function(a,i,t){if(this.radius=(e.particles.size.random?Math.random():1)*e.particles.size.value,e.particles.size.anim.enable&&(this.size_status=!1,this.vs=e.particles.size.anim.speed/100,e.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=t?t.x:Math.random()*e.canvas.w,this.y=t?t.y:Math.random()*e.canvas.h,this.x>e.canvas.w-this.radius*2?this.x=this.x-this.radius:this.x<this.radius*2&&(this.x=this.x+this.radius),this.y>e.canvas.h-this.radius*2?this.y=this.y-this.radius:this.y<this.radius*2&&(this.y=this.y+this.radius),e.particles.move.bounce&&e.fn.vendors.checkOverlap(this,t),this.color={},typeof a.value=="object")if(a.value instanceof Array){var r=a.value[Math.floor(Math.random()*e.particles.color.value.length)];this.color.rgb=w(r)}else a.value.r!=null&&a.value.g!=null&&a.value.b!=null&&(this.color.rgb={r:a.value.r,g:a.value.g,b:a.value.b}),a.value.h!=null&&a.value.s!=null&&a.value.l!=null&&(this.color.hsl={h:a.value.h,s:a.value.s,l:a.value.l});else a.value=="random"?this.color.rgb={r:Math.floor(Math.random()*256)+0,g:Math.floor(Math.random()*256)+0,b:Math.floor(Math.random()*256)+0}:typeof a.value=="string"&&(this.color=a,this.color.rgb=w(this.color.value));this.opacity=(e.particles.opacity.random?Math.random():1)*e.particles.opacity.value,e.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=e.particles.opacity.anim.speed/100,e.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var n={};switch(e.particles.move.direction){case"top":n={x:0,y:-1};break;case"top-right":n={x:.5,y:-.5};break;case"right":n={x:1,y:-0};break;case"bottom-right":n={x:.5,y:.5};break;case"bottom":n={x:0,y:1};break;case"bottom-left":n={x:-.5,y:1};break;case"left":n={x:-1,y:0};break;case"top-left":n={x:-.5,y:-.5};break;default:n={x:0,y:0};break}e.particles.move.straight?(this.vx=n.x,this.vy=n.y,e.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=n.x+Math.random()-.5,this.vy=n.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var s=e.particles.shape.type;if(typeof s=="object"){if(s instanceof Array){var v=s[Math.floor(Math.random()*s.length)];this.shape=v}}else this.shape=s;if(this.shape=="image"){var o=e.particles.shape;this.img={src:o.image.src,ratio:o.image.width/o.image.height},this.img.ratio||(this.img.ratio=1),e.tmp.img_type=="svg"&&e.tmp.source_svg!=null&&(e.fn.vendors.createSvgImg(this),e.tmp.pushing&&(this.img.loaded=!1))}},e.fn.particle.prototype.draw=function(){var a=this;if(a.radius_bubble!=null)var i=a.radius_bubble;else var i=a.radius;if(a.opacity_bubble!=null)var t=a.opacity_bubble;else var t=a.opacity;if(a.color.rgb)var r="rgba("+a.color.rgb.r+","+a.color.rgb.g+","+a.color.rgb.b+","+t+")";else var r="hsla("+a.color.hsl.h+","+a.color.hsl.s+"%,"+a.color.hsl.l+"%,"+t+")";switch(e.canvas.ctx.fillStyle=r,e.canvas.ctx.beginPath(),a.shape){case"circle":e.canvas.ctx.arc(a.x,a.y,i,0,Math.PI*2,!1);break;case"edge":e.canvas.ctx.rect(a.x-i,a.y-i,i*2,i*2);break;case"triangle":e.fn.vendors.drawShape(e.canvas.ctx,a.x-i,a.y+i/1.66,i*2,3,2);break;case"polygon":e.fn.vendors.drawShape(e.canvas.ctx,a.x-i/(e.particles.shape.polygon.nb_sides/3.5),a.y-i/.76,i*2.66/(e.particles.shape.polygon.nb_sides/3),e.particles.shape.polygon.nb_sides,1);break;case"star":e.fn.vendors.drawShape(e.canvas.ctx,a.x-i*2/(e.particles.shape.polygon.nb_sides/4),a.y-i/1.52,i*2*2.66/(e.particles.shape.polygon.nb_sides/3),e.particles.shape.polygon.nb_sides,2);break;case"image":let s=function(){e.canvas.ctx.drawImage(n,a.x-i,a.y-i,i*2,i*2/a.img.ratio)};if(e.tmp.img_type=="svg")var n=a.img.obj;else var n=e.tmp.img_obj;n&&s();break}e.canvas.ctx.closePath(),e.particles.shape.stroke.width>0&&(e.canvas.ctx.strokeStyle=e.particles.shape.stroke.color,e.canvas.ctx.lineWidth=e.particles.shape.stroke.width,e.canvas.ctx.stroke()),e.canvas.ctx.fill()},e.fn.particlesCreate=function(){for(var a=0;a<e.particles.number.value;a++)e.particles.array.push(new e.fn.particle(e.particles.color,e.particles.opacity.value))},e.fn.particlesUpdate=function(){for(var a=0;a<e.particles.array.length;a++){var i=e.particles.array[a];if(e.particles.move.enable){var t=e.particles.move.speed/2;i.x+=i.vx*t,i.y+=i.vy*t}if(e.particles.opacity.anim.enable&&(i.opacity_status==!0?(i.opacity>=e.particles.opacity.value&&(i.opacity_status=!1),i.opacity+=i.vo):(i.opacity<=e.particles.opacity.anim.opacity_min&&(i.opacity_status=!0),i.opacity-=i.vo),i.opacity<0&&(i.opacity=0)),e.particles.size.anim.enable&&(i.size_status==!0?(i.radius>=e.particles.size.value&&(i.size_status=!1),i.radius+=i.vs):(i.radius<=e.particles.size.anim.size_min&&(i.size_status=!0),i.radius-=i.vs),i.radius<0&&(i.radius=0)),e.particles.move.out_mode=="bounce")var r={x_left:i.radius,x_right:e.canvas.w,y_top:i.radius,y_bottom:e.canvas.h};else var r={x_left:-i.radius,x_right:e.canvas.w+i.radius,y_top:-i.radius,y_bottom:e.canvas.h+i.radius};switch(i.x-i.radius>e.canvas.w?(i.x=r.x_left,i.y=Math.random()*e.canvas.h):i.x+i.radius<0&&(i.x=r.x_right,i.y=Math.random()*e.canvas.h),i.y-i.radius>e.canvas.h?(i.y=r.y_top,i.x=Math.random()*e.canvas.w):i.y+i.radius<0&&(i.y=r.y_bottom,i.x=Math.random()*e.canvas.w),e.particles.move.out_mode){case"bounce":(i.x+i.radius>e.canvas.w||i.x-i.radius<0)&&(i.vx=-i.vx),(i.y+i.radius>e.canvas.h||i.y-i.radius<0)&&(i.vy=-i.vy);break}if(y("grab",e.interactivity.events.onhover.mode)&&e.fn.modes.grabParticle(i),(y("bubble",e.interactivity.events.onhover.mode)||y("bubble",e.interactivity.events.onclick.mode))&&e.fn.modes.bubbleParticle(i),(y("repulse",e.interactivity.events.onhover.mode)||y("repulse",e.interactivity.events.onclick.mode))&&e.fn.modes.repulseParticle(i),e.particles.line_linked.enable||e.particles.move.attract.enable)for(var n=a+1;n<e.particles.array.length;n++){var s=e.particles.array[n];e.particles.line_linked.enable&&e.fn.interact.linkParticles(i,s),e.particles.move.attract.enable&&e.fn.interact.attractParticles(i,s),e.particles.move.bounce&&e.fn.interact.bounceParticles(i,s)}}},e.fn.particlesDraw=function(){e.canvas.ctx.clearRect(0,0,e.canvas.w,e.canvas.h),e.fn.particlesUpdate();for(var a=0;a<e.particles.array.length;a++){var i=e.particles.array[a];i.draw()}},e.fn.particlesEmpty=function(){e.particles.array=[]},e.fn.particlesRefresh=function(){cancelRequestAnimFrame(e.fn.checkAnimFrame),cancelRequestAnimFrame(e.fn.drawAnimFrame),e.tmp.source_svg=void 0,e.tmp.img_obj=void 0,e.tmp.count_svg=0,e.fn.particlesEmpty(),e.fn.canvasClear(),e.fn.vendors.start()},e.fn.interact.linkParticles=function(a,i){var t=a.x-i.x,r=a.y-i.y,n=Math.sqrt(t*t+r*r);if(n<=e.particles.line_linked.distance){var s=e.particles.line_linked.opacity-n/(1/e.particles.line_linked.opacity)/e.particles.line_linked.distance;if(s>0){var v=e.particles.line_linked.color_rgb_line;e.canvas.ctx.strokeStyle="rgba("+v.r+","+v.g+","+v.b+","+s+")",e.canvas.ctx.lineWidth=e.particles.line_linked.width,e.canvas.ctx.beginPath(),e.canvas.ctx.moveTo(a.x,a.y),e.canvas.ctx.lineTo(i.x,i.y),e.canvas.ctx.stroke(),e.canvas.ctx.closePath()}}},e.fn.interact.attractParticles=function(a,i){var t=a.x-i.x,r=a.y-i.y,n=Math.sqrt(t*t+r*r);if(n<=e.particles.line_linked.distance){var s=t/(e.particles.move.attract.rotateX*1e3),v=r/(e.particles.move.attract.rotateY*1e3);a.vx-=s,a.vy-=v,i.vx+=s,i.vy+=v}},e.fn.interact.bounceParticles=function(a,i){var t=a.x-i.x,r=a.y-i.y,n=Math.sqrt(t*t+r*r),s=a.radius+i.radius;n<=s&&(a.vx=-a.vx,a.vy=-a.vy,i.vx=-i.vx,i.vy=-i.vy)},e.fn.modes.pushParticles=function(a,i){e.tmp.pushing=!0;for(var t=0;t<a;t++)e.particles.array.push(new e.fn.particle(e.particles.color,e.particles.opacity.value,{x:i?i.pos_x:Math.random()*e.canvas.w,y:i?i.pos_y:Math.random()*e.canvas.h})),t==a-1&&(e.particles.move.enable||e.fn.particlesDraw(),e.tmp.pushing=!1)},e.fn.modes.removeParticles=function(a){e.particles.array.splice(0,a),e.particles.move.enable||e.fn.particlesDraw()},e.fn.modes.bubbleParticle=function(a){if(e.interactivity.events.onhover.enable&&y("bubble",e.interactivity.events.onhover.mode)){let u=function(){a.opacity_bubble=a.opacity,a.radius_bubble=a.radius};var i=a.x-e.interactivity.mouse.pos_x,t=a.y-e.interactivity.mouse.pos_y,r=Math.sqrt(i*i+t*t),n=1-r/e.interactivity.modes.bubble.distance;if(r<=e.interactivity.modes.bubble.distance){if(n>=0&&e.interactivity.status=="mousemove"){if(e.interactivity.modes.bubble.size!=e.particles.size.value)if(e.interactivity.modes.bubble.size>e.particles.size.value){var s=a.radius+e.interactivity.modes.bubble.size*n;s>=0&&(a.radius_bubble=s)}else{var v=a.radius-e.interactivity.modes.bubble.size,s=a.radius-v*n;s>0?a.radius_bubble=s:a.radius_bubble=0}if(e.interactivity.modes.bubble.opacity!=e.particles.opacity.value)if(e.interactivity.modes.bubble.opacity>e.particles.opacity.value){var o=e.interactivity.modes.bubble.opacity*n;o>a.opacity&&o<=e.interactivity.modes.bubble.opacity&&(a.opacity_bubble=o)}else{var o=a.opacity-(e.particles.opacity.value-e.interactivity.modes.bubble.opacity)*n;o<a.opacity&&o>=e.interactivity.modes.bubble.opacity&&(a.opacity_bubble=o)}}}else u();e.interactivity.status=="mouseleave"&&u()}else if(e.interactivity.events.onclick.enable&&y("bubble",e.interactivity.events.onclick.mode)){let u=function(m,_,h,g,p){if(m!=_)if(e.tmp.bubble_duration_end){if(h!=null){var z=g-f*(g-m)/e.interactivity.modes.bubble.duration,M=m-z;b=m+M,p=="size"&&(a.radius_bubble=b),p=="opacity"&&(a.opacity_bubble=b)}}else if(r<=e.interactivity.modes.bubble.distance){if(h!=null)var x=h;else var x=g;if(x!=m){var b=g-f*(g-m)/e.interactivity.modes.bubble.duration;p=="size"&&(a.radius_bubble=b),p=="opacity"&&(a.opacity_bubble=b)}}else p=="size"&&(a.radius_bubble=void 0),p=="opacity"&&(a.opacity_bubble=void 0)};if(e.tmp.bubble_clicking){var i=a.x-e.interactivity.mouse.click_pos_x,t=a.y-e.interactivity.mouse.click_pos_y,r=Math.sqrt(i*i+t*t),f=(new Date().getTime()-e.interactivity.mouse.click_time)/1e3;f>e.interactivity.modes.bubble.duration&&(e.tmp.bubble_duration_end=!0),f>e.interactivity.modes.bubble.duration*2&&(e.tmp.bubble_clicking=!1,e.tmp.bubble_duration_end=!1)}e.tmp.bubble_clicking&&(u(e.interactivity.modes.bubble.size,e.particles.size.value,a.radius_bubble,a.radius,"size"),u(e.interactivity.modes.bubble.opacity,e.particles.opacity.value,a.opacity_bubble,a.opacity,"opacity"))}},e.fn.modes.repulseParticle=function(a){if(e.interactivity.events.onhover.enable&&y("repulse",e.interactivity.events.onhover.mode)&&e.interactivity.status=="mousemove"){var i=a.x-e.interactivity.mouse.pos_x,t=a.y-e.interactivity.mouse.pos_y,r=Math.sqrt(i*i+t*t),n={x:i/r,y:t/r},s=e.interactivity.modes.repulse.distance,v=100,o=F(1/s*(-1*Math.pow(r/s,2)+1)*s*v,0,50),f={x:a.x+n.x*o,y:a.y+n.y*o};e.particles.move.out_mode=="bounce"?(f.x-a.radius>0&&f.x+a.radius<e.canvas.w&&(a.x=f.x),f.y-a.radius>0&&f.y+a.radius<e.canvas.h&&(a.y=f.y)):(a.x=f.x,a.y=f.y)}else if(e.interactivity.events.onclick.enable&&y("repulse",e.interactivity.events.onclick.mode))if(e.tmp.repulse_finish||(e.tmp.repulse_count++,e.tmp.repulse_count==e.particles.array.length&&(e.tmp.repulse_finish=!0)),e.tmp.repulse_clicking){let p=function(){var x=Math.atan2(m,u);if(a.vx=h*Math.cos(x),a.vy=h*Math.sin(x),e.particles.move.out_mode=="bounce"){var b={x:a.x+a.vx,y:a.y+a.vy};(b.x+a.radius>e.canvas.w||b.x-a.radius<0)&&(a.vx=-a.vx),(b.y+a.radius>e.canvas.h||b.y-a.radius<0)&&(a.vy=-a.vy)}};var s=Math.pow(e.interactivity.modes.repulse.distance/6,3),u=e.interactivity.mouse.click_pos_x-a.x,m=e.interactivity.mouse.click_pos_y-a.y,_=u*u+m*m,h=-s/_*1;_<=s&&p()}else e.tmp.repulse_clicking==!1&&(a.vx=a.vx_i,a.vy=a.vy_i)},e.fn.modes.grabParticle=function(a){if(e.interactivity.events.onhover.enable&&e.interactivity.status=="mousemove"){var i=a.x-e.interactivity.mouse.pos_x,t=a.y-e.interactivity.mouse.pos_y,r=Math.sqrt(i*i+t*t);if(r<=e.interactivity.modes.grab.distance){var n=e.interactivity.modes.grab.line_linked.opacity-r/(1/e.interactivity.modes.grab.line_linked.opacity)/e.interactivity.modes.grab.distance;if(n>0){var s=e.particles.line_linked.color_rgb_line;e.canvas.ctx.strokeStyle="rgba("+s.r+","+s.g+","+s.b+","+n+")",e.canvas.ctx.lineWidth=e.particles.line_linked.width,e.canvas.ctx.beginPath(),e.canvas.ctx.moveTo(a.x,a.y),e.canvas.ctx.lineTo(e.interactivity.mouse.pos_x,e.interactivity.mouse.pos_y),e.canvas.ctx.stroke(),e.canvas.ctx.closePath()}}}},e.fn.vendors.eventsListeners=function(){e.interactivity.detect_on=="window"?e.interactivity.el=window:e.interactivity.el=e.canvas.el,(e.interactivity.events.onhover.enable||e.interactivity.events.onclick.enable)&&(e.interactivity.el.addEventListener("mousemove",function(a){if(e.interactivity.el==window)var i=a.clientX,t=a.clientY;else var i=a.offsetX||a.clientX,t=a.offsetY||a.clientY;e.interactivity.mouse.pos_x=i,e.interactivity.mouse.pos_y=t,e.tmp.retina&&(e.interactivity.mouse.pos_x*=e.canvas.pxratio,e.interactivity.mouse.pos_y*=e.canvas.pxratio),e.interactivity.status="mousemove"}),e.interactivity.el.addEventListener("mouseleave",function(a){e.interactivity.mouse.pos_x=null,e.interactivity.mouse.pos_y=null,e.interactivity.status="mouseleave"})),e.interactivity.events.onclick.enable&&e.interactivity.el.addEventListener("click",function(){if(e.interactivity.mouse.click_pos_x=e.interactivity.mouse.pos_x,e.interactivity.mouse.click_pos_y=e.interactivity.mouse.pos_y,e.interactivity.mouse.click_time=new Date().getTime(),e.interactivity.events.onclick.enable)switch(e.interactivity.events.onclick.mode){case"push":e.particles.move.enable||e.interactivity.modes.push.particles_nb==1?e.fn.modes.pushParticles(e.interactivity.modes.push.particles_nb,e.interactivity.mouse):e.interactivity.modes.push.particles_nb>1&&e.fn.modes.pushParticles(e.interactivity.modes.push.particles_nb);break;case"remove":e.fn.modes.removeParticles(e.interactivity.modes.remove.particles_nb);break;case"bubble":e.tmp.bubble_clicking=!0;break;case"repulse":e.tmp.repulse_clicking=!0,e.tmp.repulse_count=0,e.tmp.repulse_finish=!1,setTimeout(function(){e.tmp.repulse_clicking=!1},e.interactivity.modes.repulse.duration*1e3);break}})},e.fn.vendors.densityAutoParticles=function(){if(e.particles.number.density.enable){var a=e.canvas.el.width*e.canvas.el.height/1e3;e.tmp.retina&&(a=a/(e.canvas.pxratio*2));var i=a*e.particles.number.value/e.particles.number.density.value_area,t=e.particles.array.length-i;t<0?e.fn.modes.pushParticles(Math.abs(t)):e.fn.modes.removeParticles(t)}},e.fn.vendors.checkOverlap=function(a,i){for(var t=0;t<e.particles.array.length;t++){var r=e.particles.array[t],n=a.x-r.x,s=a.y-r.y,v=Math.sqrt(n*n+s*s);v<=a.radius+r.radius&&(a.x=i?i.x:Math.random()*e.canvas.w,a.y=i?i.y:Math.random()*e.canvas.h,e.fn.vendors.checkOverlap(a))}},e.fn.vendors.createSvgImg=function(a){var i=e.tmp.source_svg,t=/#([0-9A-F]{3,6})/gi,r=i.replace(t,function(f,u,m,_){if(a.color.rgb)var h="rgba("+a.color.rgb.r+","+a.color.rgb.g+","+a.color.rgb.b+","+a.opacity+")";else var h="hsla("+a.color.hsl.h+","+a.color.hsl.s+"%,"+a.color.hsl.l+"%,"+a.opacity+")";return h}),n=new Blob([r],{type:"image/svg+xml;charset=utf-8"}),s=window.URL||window.webkitURL||window,v=s.createObjectURL(n),o=new Image;o.addEventListener("load",function(){a.img.obj=o,a.img.loaded=!0,s.revokeObjectURL(v),e.tmp.count_svg++}),o.src=v},e.fn.vendors.destroypJS=function(){cancelAnimationFrame(e.fn.drawAnimFrame),l.remove(),pJSDom=null},e.fn.vendors.drawShape=function(a,i,t,r,n,s){var v=n*s,o=n/s,f=180*(o-2)/o,u=Math.PI-Math.PI*f/180;a.save(),a.beginPath(),a.translate(i,t),a.moveTo(0,0);for(var m=0;m<v;m++)a.lineTo(r,0),a.translate(r,0),a.rotate(u);a.fill(),a.restore()},e.fn.vendors.exportImg=function(){window.open(e.canvas.el.toDataURL("image/png"),"_blank")},e.fn.vendors.loadImg=function(a){if(e.tmp.img_error=void 0,e.particles.shape.image.src!="")if(a=="svg"){var i=new XMLHttpRequest;i.open("GET",e.particles.shape.image.src),i.onreadystatechange=function(r){i.readyState==4&&(i.status==200?(e.tmp.source_svg=r.currentTarget.response,e.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),e.tmp.img_error=!0))},i.send()}else{var t=new Image;t.addEventListener("load",function(){e.tmp.img_obj=t,e.fn.vendors.checkBeforeDraw()}),t.src=e.particles.shape.image.src}else console.log("Error pJS - No image.src"),e.tmp.img_error=!0},e.fn.vendors.draw=function(){e.particles.shape.type=="image"?e.tmp.img_type=="svg"?e.tmp.count_svg>=e.particles.number.value?(e.fn.particlesDraw(),e.particles.move.enable?e.fn.drawAnimFrame=requestAnimFrame(e.fn.vendors.draw):cancelRequestAnimFrame(e.fn.drawAnimFrame)):e.tmp.img_error||(e.fn.drawAnimFrame=requestAnimFrame(e.fn.vendors.draw)):e.tmp.img_obj!=null?(e.fn.particlesDraw(),e.particles.move.enable?e.fn.drawAnimFrame=requestAnimFrame(e.fn.vendors.draw):cancelRequestAnimFrame(e.fn.drawAnimFrame)):e.tmp.img_error||(e.fn.drawAnimFrame=requestAnimFrame(e.fn.vendors.draw)):(e.fn.particlesDraw(),e.particles.move.enable?e.fn.drawAnimFrame=requestAnimFrame(e.fn.vendors.draw):cancelRequestAnimFrame(e.fn.drawAnimFrame))},e.fn.vendors.checkBeforeDraw=function(){e.particles.shape.type=="image"?e.tmp.img_type=="svg"&&e.tmp.source_svg==null?e.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(e.tmp.checkAnimFrame),e.tmp.img_error||(e.fn.vendors.init(),e.fn.vendors.draw())):(e.fn.vendors.init(),e.fn.vendors.draw())},e.fn.vendors.init=function(){e.fn.retinaInit(),e.fn.canvasInit(),e.fn.canvasSize(),e.fn.canvasPaint(),e.fn.particlesCreate(),e.fn.vendors.densityAutoParticles(),e.particles.line_linked.color_rgb_line=w(e.particles.line_linked.color)},e.fn.vendors.start=function(){y("image",e.particles.shape.type)?(e.tmp.img_type=e.particles.shape.image.src.substr(e.particles.shape.image.src.length-3),e.fn.vendors.loadImg(e.tmp.img_type)):e.fn.vendors.checkBeforeDraw()},e.fn.vendors.eventsListeners(),e.fn.vendors.start()};Object.deepExtend=function(c,d){for(var l in d)d[l]&&d[l].constructor&&d[l].constructor===Object?(c[l]=c[l]||{},arguments.callee(c[l],d[l])):c[l]=d[l];return c};window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(c){window.setTimeout(c,1e3/60)}}();window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}();function w(c){var d=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;c=c.replace(d,function(e,a,i,t){return a+a+i+i+t+t});var l=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);return l?{r:parseInt(l[1],16),g:parseInt(l[2],16),b:parseInt(l[3],16)}:null}function F(c,d,l){return Math.min(Math.max(c,d),l)}function y(c,d){return d.indexOf(c)>-1}window.pJSDom=[];particlesJS=function(c,d){typeof c!="string"&&(d=c,c="particles-js"),c||(c="particles-js");var l=document.getElementById(c),e="particles-js-canvas-el",a=l.getElementsByClassName(e);if(a.length)for(;a.length>0;)l.removeChild(a[0]);var i=document.createElement("canvas");i.className=e,i.style.width="100%",i.style.height="100%";var t=document.getElementById(c).appendChild(i);t!=null&&pJSDom.push(new A(c,d))};var k=particlesJS;k("js-header-canvas",{particles:{number:{density:{enable:!0,value_area:4655.971085630409}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:4},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.6313181133058181,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:13,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:110.48066982851817,color:"#ffffff",opacity:.2,width:1},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:.3}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});})();
