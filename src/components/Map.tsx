import * as React from 'react'
import * as mapboxgl from 'mapbox-gl'
import './Map.css'

export interface MapProps {

  // The css property for the height
  height?: string

  // The css property for the width
  width?: string
}

export interface MapState {
  map: mapboxgl.Map | undefined
}

export class Map extends React.Component<MapProps, MapState> {
  static defaultProps: Partial<MapProps> = {
    width: '100%',
    height: '100%'
  }

  constructor (props: MapProps) {
    super(props)

    // Do this to avoid TypeScript errors
    const mapbox = mapboxgl as any
    mapbox.accessToken = process.env.MAPBOX_KEY

    this.setupMap = this.setupMap.bind(this)
  }


  componentDidUpdate () {
    if (this.state.map) {
      this.state.map.resize()
    }
  }

  /**
   * Sets up the map
   */
  setupMap (ref: HTMLDivElement) {
    const map = new mapboxgl.Map({
      container: ref,
      // Move to prop
      style: 'mapbox://styles/mapbox/streets-v9'
    })

    this.setState({ map })
  }

  render (): JSX.Element {

    const mapStyle = {
      width: this.props.width,
      height: this.props.height
    }

    return (
      <div className='Map'>
        <div ref={this.setupMap} style={mapStyle}/>
      </div>
    )
  }
}
