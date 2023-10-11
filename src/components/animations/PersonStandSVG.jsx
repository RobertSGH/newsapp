import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function PersonStandSVG() {
  useEffect(() => {
    const additionalAnimations = gsap.timeline();

    additionalAnimations
      .fromTo(
        '#_stand_',
        { scaleY: 0, transformOrigin: 'bottom' },
        { duration: 1, scaleY: 1 }
      )
      .fromTo(
        '#_body_',
        { autoAlpha: 0 },
        { duration: 1, autoAlpha: 1 },
        '-=0.5'
      )
      .fromTo(
        '#_mics_',
        { autoAlpha: 0 },
        { duration: 1, autoAlpha: 1 },
        '-=0.5'
      );

    const micsAnimation = gsap.timeline({ repeat: -1, yoyo: true });
    micsAnimation.fromTo(
      '#_mics_',
      { autoAlpha: 1, scale: 0.8, transformOrigin: 'center' },
      { duration: 1, autoAlpha: 5, scale: 1 },
      '-=0.7'
    );

    return () => {
      additionalAnimations.kill();
      micsAnimation.kill();
    };
  }, []);

  return (
    <svg
      id='svgthree'
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='-45 -50 288.2 441.1'
    >
      <g id='_body_' data-name='&amp;lt;body&amp;gt;'>
        <path
          d='m108.2,88.7l-37-.7-4.2,1.4-1.5.9.4,1.3,11.5,39.8,3.4,10.7h19.1l1.8-10,10-40.4.4-1.6-3.8-1.4Z'
          fill='#fff'
          stroke='#231f20'
          strokeMiterlimit='10'
        />
        <path
          d='m100.6,78.5h-21.7c-3.7,0-6.8,2.9-6.8,6.5v16.8c0,3.6,3,6.5,6.8,6.5h21.7c3.3,0,6-2.2,6.6-5.1,0,0,.1,0,.2,0v-18.1c0-3.6-3-6.5-6.8-6.5Z'
          fill='#fff'
          stroke='#231f20'
          strokeMiterlimit='10'
        />
        <path
          d='m65.8,91.5c-17.7,4.3-31.4,14.1-31.4,29.8l-1.4,20.8h47.7l-3.4-10.7-11.5-39.8Z'
          fill='#fff'
          stroke='#231f20'
          strokeMiterlimit='10'
        />
        <path
          d='m99.8,142h46.1l-1.5-20.8c0-15.1-14.4-25.1-32.9-29.6l-10,40.4-1.8,10Z'
          fill='#fff'
          stroke='#231f20'
          strokeMiterlimit='10'
        />
        <path
          d='m70.4,89.7s.6,6.6,11.2,10.2c10.6,3.6,3.5,12,3.5,12l-8.3,1.9-4.9-10.8-2.1-8.2.5-5.1Z'
          fill='#fff'
          stroke='#231f20'
          strokeMiterlimit='10'
        />
        <path
          d='m108.6,90.9s-.6,6.6-11.2,10.2c-10.6,3.6-3.5,12-3.5,12l8.3,1.9,4.9-10.8,2.1-8.2-.5-5.1Z'
          fill='#fff8f8'
          stroke='#231f20'
          strokeMiterlimit='10'
        />
        <path
          d='m67.1,86.9l-9.4,5.4,19.6,39-10.2-44.4Z'
          fill='#fff'
          stroke='#231f20'
          strokeMiterlimit='10'
        />
        <path
          d='m111.8,87.6l9.4,5.4-19.6,39,10.2-44.4Z'
          fill='#fff'
          stroke='#231f20'
          strokeMiterlimit='10'
        />
        <path
          d='m88.2,116.6l-5.2,25.3h14.4l-5.9-25.3h-3.3Z'
          fill='#fff'
          stroke='#231f20'
          strokeMiterlimit='10'
        />
        <path
          d='m85.6,101.7l8.6.2,1.6,7.8-1.8,7.9h-8.1l-2-7.4,1.6-8.5Z'
          fill='#fff'
          stroke='#231f20'
          strokeMiterlimit='10'
        />
        <path
          d='m123.4,45.6c-.9-.3-1.8.4-2.8,1.7,0-.7,0-1.3,0-1.9,0-21-13-38-29.1-38s-29.1,17-29.1,38,0,1.3,0,1.9c-.9-1.3-1.9-2-2.7-1.7-2.1.7-2.7,6.6-1.4,13.1,1.3,6.5,4,11.3,6,10.6.7-.2,1.3-1.1,1.6-2.5,5,15.7,14.5,29.9,25.5,29.9s20.6-14.2,25.5-29.9c.3,1.4.9,2.3,1.6,2.5,2,.7,4.8-4,6-10.6,1.3-6.5.7-12.4-1.4-13.1Z'
          fill='#fff'
          stroke='#231f20'
          strokeMiterlimit='10'
        />
        <path
          d='m109.4,15.2c3.9-23.8-53.9-22.5-46.9,32.1l3.5,19.5s1.2-21.5,2.1-28.8c.5-4.4,2.2-11.7,10.2-15.4,2.3,2.1,7.3,3.5,13.2,3.5s11.7-1.7,13.7-4c10.3,5.1,9,13.7,10.2,28.6l1.7,16.1,3.5-19.5s4.1-34.6-11.3-32.1Z'
          fill='#fff'
          stroke='#231f20'
          strokeMiterlimit='10'
        />
      </g>
      <g id='_mics_' data-name='&amp;lt;mics&amp;gt;'>
        <path
          d='m132.7,137.2v-8.7c0-.7-.8-1.1-1.3-1.1h-.9v-9.2c0-2.7-1.1-5.2-3-6.7l-1.7-1.3c.7-2.4.1-5.2-1.5-7l-9.2-9.7c-2.2-2.3-5.5-2-7.4.7-1.9,2.7-1.6,6.8.5,9.1l9.2,9.7c2.2,2.3,5.5,2,7.4-.7,0,0,0,0,0,0l1.5,1.2c1.3,1,2,2.8,2,4.7v9.2h-.7c-.6,0-1,.4-1,1.1v8.7h-.9c-.9,0-1.8,1.1-1.8,2.3v1.8h10.2v-1.8c0-1.1-.5-2.2-1.4-2.2Z'
          fill='#fff'
          stroke='#231f20'
          strokeMiterlimit='10'
        />
        <path
          d='m70.2,93.5l-9.2,9.7c-1.7,1.8-2.2,4.5-1.5,6.9l-1.7,1.3c-1.9,1.5-3.1,4-3.1,6.7v9.2h-.7c-.6,0-1.7.4-1.7,1.1v8.8c-.8.3-1.7,1.2-1.7,2.2v1.8h10.5v-1.8c0-1.1-.5-2.3-1.5-2.3h-1.3v-8.7c0-.7,0-1.1-.6-1.1h-.8v-9.2c0-1.9.7-3.7,2-4.7l1.5-1.2s0,0,0,0c1.9,2.7,5.2,3,7.4.7l9.2-9.7c2.2-2.3,2.4-6.4.5-9.1-1.9-2.7-5.2-3-7.4-.7Z'
          fill='#fff'
          stroke='#231f20'
          strokeMiterlimit='10'
        />
      </g>
      <g id='_stand_' data-name='&amp;lt;stand&amp;gt;'>
        <path
          d='m159.3,178l-9.3,127.4-2.6,35.2H40.4l-2.5-35.2-9-127.4h130.3Z'
          fill='#fff'
          stroke='#231f20'
          strokeMiterlimit='10'
        />
        <path
          d='m150,305.4l-2.6,35.2H40.4l-2.5-35.2h112.1Z'
          fill='#fff'
          stroke='#231f20'
          strokeMiterlimit='10'
        />
        <path
          d='m111.7,236.7c0,11.9-7.9,21.6-17.6,21.6s-17.6-9.7-17.6-21.6,7.9-21.6,17.6-21.6,17.6,9.7,17.6,21.6Z'
          fill='#fff'
          stroke='#231f20'
          strokeMiterlimit='10'
        />
        <path
          d='m13.1,165.9l4.3,12.2h151.8l5.9-12.2H13.1Z'
          fill='#fff'
          stroke='#231f20'
          strokeMiterlimit='10'
        />
        <path
          d='m3.6,157.7l-3-15.7h187.1l-2.5,15.3c-.9,5.5-4.9,9.5-9.5,9.5H13c-4.5,0-8.4-3.8-9.4-9.1Z'
          fill='#fff'
          stroke='#231f20'
          strokeMiterlimit='10'
        />
      </g>
    </svg>
  );
}