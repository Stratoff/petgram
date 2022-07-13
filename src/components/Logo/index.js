import React from 'react'
import { Svg } from './styles'

export const Logo = (props) => (
  <Svg
    width={462.631}
    height={124.4}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='18.684 12.8 462.631 124.4'
    style={{
      background: '0 0'
    }}
    preserveAspectRatio='xMidYMid'
    {...props}
  >
    <defs>
      <linearGradient
        id='b'
        x1={0.043}
        x2={0.957}
        y1={0.297}
        y2={0.703}
        gradientUnits='objectBoundingBox'
      >
        <stop offset={0} stopColor='#ffb200' />
        <stop offset={0.5} stopColor='#e10057' />
        <stop offset={1} stopColor='#5A1A80' />
      </linearGradient>
      <linearGradient id='d' x1={0} x2={0} y1={0} y2={1}>
        <stop offset={0.2} stopColor='#fff' stopOpacity={0.8} />
        <stop offset={0.8} stopColor='#fff' stopOpacity={0} />
      </linearGradient>
      <filter id='c' x='-100%' y='-100%' width='300%' height='300%'>
        <feMorphology radius={2} />
      </filter>
      <filter id='a' x='-100%' y='-100%' width='300%' height='300%'>
        <feFlood floodColor='#fff' result='flood' />
        <feConvolveMatrix
          in='SourceGraphic'
          result='conv'
          order='8,8'
          divisor={1}
          kernelMatrix='0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0 0 1 0 0 0 0 1 0 0 1 1 0 0 1 1 0 0 0 0 1 1 0 0 0'
        />
        <feOffset dy={4} in='conv' result='offset' />
        <feComposite operator='in' in='flood' in2='offset' result='comp' />
        <feGaussianBlur in='offset' stdDeviation={3} result='shadow' />
        <feColorMatrix
          in='shadow'
          values='0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.3 0'
          result='dark-shadow'
        />
        <feOffset dy={4} in='dark-shadow' result='offset-shadow' />
        <feOffset dy={2} in='conv' result='offset-2' />
        <feComposite
          operator='out'
          in='offset'
          in2='offset-2'
          result='edge-diff'
        />
        <feGaussianBlur in='edge-diff' stdDeviation={1} result='edge-blur' />
        <feColorMatrix
          in='edge-blur'
          result='edge-shadow'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
        />
        <feComposite
          operator='in'
          in='edge-shadow'
          in2='offset'
          result='edge-shadow-in'
        />
        <feOffset dy={1} in='edge-shadow-in' result='edge-shadow-final' />
        <feMerge result='out'>
          <feMergeNode in='offset-shadow' />
          <feMergeNode in='comp' />
          <feMergeNode in='edge-shadow-final' />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
      </filter>
    </defs>
    <g filter='url(#a)'>
      <path
        d='M12.16 0H5.75v-44.81h24.53q10.88 0 10.88 10.9v6.38q0 10.9-10.88 10.9H12.16V0Zm0-38.41v15.38h17.78q2.56 0 3.69-1.13 1.12-1.12 1.12-3.68v-5.75q0-2.57-1.12-3.69-1.13-1.13-3.69-1.13H12.16ZM50.09 0v-44.81h32.66v6.4H56.5v12.82h22.41v6.4H56.5v12.78h26.25V0H50.09ZM88.5-38.41v-6.4h35.84v6.4h-14.71V0h-6.41v-38.41H88.5Zm43.53 32v-32q0-1.31.5-2.48t1.38-2.03q.87-.86 2.04-1.38 1.18-.51 2.49-.51h24.31q1.31 0 2.48.51 1.18.52 2.05 1.38.88.86 1.38 2.03.5 1.17.5 2.48v5.78h-6.41v-5.78h-24.31v32h24.31v-10.87h-12.16v-6.41h18.57v17.28q0 1.32-.5 2.49-.5 1.17-1.38 2.04-.87.88-2.05 1.38-1.17.5-2.48.5h-24.31q-1.31 0-2.49-.5-1.17-.5-2.04-1.38-.88-.87-1.38-2.04-.5-1.17-.5-2.49Zm84.03-27.5v5.1q0 9.37-8 10.68L216.5 0h-7.09l-8.32-17.91h-14.03V0h-6.4v-44.81h24.53q10.87 0 10.87 10.9Zm-29-4.5v14.1h17.78q2.57 0 3.69-1.13 1.13-1.12 1.13-3.69v-4.46q0-2.57-1.13-3.69-1.12-1.13-3.69-1.13h-17.78Zm53.13-6.4h6.4L263.88 0h-6.41l-3.97-10.31h-20.22L229.31 0h-6.4l17.28-44.81Zm3.22 8.34-7.69 19.75h15.31l-7.62-19.75ZM296.59 0h-1.9l-16.72-32.84V0h-6.41v-44.81h7l17.07 33.75 17.09-33.75h6.97V0h-6.38v-32.84L296.59 0Z'
        fill='url(#b)'
        transform='translate(87.28 97.405)'
      />
    </g>
    <g filter='url(#c)'>
      <path
        d='M12.16 0H5.75v-44.81h24.53q10.88 0 10.88 10.9v6.38q0 10.9-10.88 10.9H12.16V0Zm0-38.41v15.38h17.78q2.56 0 3.69-1.13 1.12-1.12 1.12-3.68v-5.75q0-2.57-1.12-3.69-1.13-1.13-3.69-1.13H12.16ZM50.09 0v-44.81h32.66v6.4H56.5v12.82h22.41v6.4H56.5v12.78h26.25V0H50.09ZM88.5-38.41v-6.4h35.84v6.4h-14.71V0h-6.41v-38.41H88.5Zm43.53 32v-32q0-1.31.5-2.48t1.38-2.03q.87-.86 2.04-1.38 1.18-.51 2.49-.51h24.31q1.31 0 2.48.51 1.18.52 2.05 1.38.88.86 1.38 2.03.5 1.17.5 2.48v5.78h-6.41v-5.78h-24.31v32h24.31v-10.87h-12.16v-6.41h18.57v17.28q0 1.32-.5 2.49-.5 1.17-1.38 2.04-.87.88-2.05 1.38-1.17.5-2.48.5h-24.31q-1.31 0-2.49-.5-1.17-.5-2.04-1.38-.88-.87-1.38-2.04-.5-1.17-.5-2.49Zm84.03-27.5v5.1q0 9.37-8 10.68L216.5 0h-7.09l-8.32-17.91h-14.03V0h-6.4v-44.81h24.53q10.87 0 10.87 10.9Zm-29-4.5v14.1h17.78q2.57 0 3.69-1.13 1.13-1.12 1.13-3.69v-4.46q0-2.57-1.13-3.69-1.12-1.13-3.69-1.13h-17.78Zm53.13-6.4h6.4L263.88 0h-6.41l-3.97-10.31h-20.22L229.31 0h-6.4l17.28-44.81Zm3.22 8.34-7.69 19.75h15.31l-7.62-19.75ZM296.59 0h-1.9l-16.72-32.84V0h-6.41v-44.81h7l17.07 33.75 17.09-33.75h6.97V0h-6.38v-32.84L296.59 0Z'
        fill='url(#d)'
        transform='translate(87.28 97.405)'
      />
    </g>
  </Svg>
)
