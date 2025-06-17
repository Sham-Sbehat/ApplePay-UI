import React, { useEffect, useRef, useState } from 'react'
import { lightningChart, ChartXY, LineSeries } from '@arction/lcjs'
import { interval, Subscription } from 'rxjs'
import { map, filter } from 'rxjs/operators'

type FilterType = 'all' | 'positive' | 'negative'

const LineChartLC: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const chartRef = useRef<ChartXY | null>(null)
  const seriesRef = useRef<LineSeries | null>(null)
  const subscriptionRef = useRef<Subscription | null>(null)
  const pointsRef = useRef<{ x: number; y: number }[]>([])

  const [filterType, setFilterType] = useState<FilterType>('all')

  useEffect(() => {
    if (!containerRef.current) return

    const lc = lightningChart({
      license:
        '0002-n0i9AP8MN/ezP+gV3RZRzNiQvQvBKwBJvTnrFTHppybuCwWuickxBJV+q3qyoeEBGSE4hS0aeo3pySDywrb/iIsl-MEUCIAiJOU3BrUq71LqSlRAIFAI0dKK05qBRIJYHFmBoOoIHAiEA4Y55O1QpeuEkiuVktPGLauOHc1TzxNu85/vz/eNscz8=',
      licenseInformation: {
        appTitle: 'LightningChart JS Trial',
        company: 'LightningChart Ltd.',
      },
    })

    const chart = lc.ChartXY({
      container: containerRef.current,
    })
    chartRef.current = chart

    const series = chart.addLineSeries()
    seriesRef.current = series

    chart.setTitle('Line Chart with RxJS Dynamic Filters')
    chart.getDefaultAxisX().setTitle('X Axis')
    chart.getDefaultAxisY().setTitle('Y Axis')

    return () => {
      subscriptionRef.current?.unsubscribe()
      chart.dispose()
      chartRef.current = null
      seriesRef.current = null
      pointsRef.current = []
    }
  }, [])

  useEffect(() => {
    if (!seriesRef.current) return

    subscriptionRef.current?.unsubscribe()
    pointsRef.current = []
    seriesRef.current.clear()

    const filterFn = (point: { x: number; y: number }) => {
      if (filterType === 'all') return true
      if (filterType === 'positive') return point.y > 0
      if (filterType === 'negative') return point.y < 0
      return true
    }

    const data$ = interval(100).pipe(
      map(i => {
        const x = i * 0.1
        return { x, y: Math.sin(x) }
      }),
      filter(filterFn)
    )

    subscriptionRef.current = data$.subscribe(point => {
      pointsRef.current.push(point)
      seriesRef.current?.add(point)

      if (pointsRef.current.length > 100) {
        pointsRef.current = pointsRef.current.slice(pointsRef.current.length - 100)
        seriesRef.current?.clear()
        seriesRef.current?.add(pointsRef.current)
      }
    })

    return () => subscriptionRef.current?.unsubscribe()
  }, [filterType])

  return (
    <div style={{ width: 700, margin: 'auto' ,marginTop:'50px',marginBottom:'50px'}}>
      <div ref={containerRef} style={{ height: 400 }} />
      <div style={{ marginTop: 20, textAlign: 'center' }}>
        <button onClick={() => setFilterType('all')} style={{ marginRight: 10 }}>
          Show All
        </button>
        <button onClick={() => setFilterType('positive')} style={{ marginRight: 10 }}>
          Show Positive ()
        </button>
        <button onClick={() => setFilterType('negative')}>Show Negative</button>
      </div>
    </div>
  )
}

export default LineChartLC
