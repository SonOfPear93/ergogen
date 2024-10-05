module.exports = {
  params: {
    VCC: {type:'net', value: 'VCC'},
    SDA: {type:'net', value: 'P2' },
    SCL: {type:'net', value: 'P3' },
    INT: {type:'net', value: 'INT' }, // usually best not to connect this pin
    GND: {type:'net', value: 'GND'},
  },
  body: p => {
    return `
      (module pimoroni_trackball_flippable (layer F.Cu) (tedit 62047C9E)
      ${p.at /* parametric position */}
        (descr "Pimoroni I2C trackball breakout")
        (tags "Through hole pin header THT 1x05 2.54mm single row")
        (fp_text reference REF** (at -18.4 0.12) (layer F.SilkS)
          (effects (font (size 1 1) (thickness 0.15)))
        )
        (fp_text value pimoroni_trackball_flippable (at -12.5 7.41) (layer F.Fab)
          (effects (font (size 1 1) (thickness 0.15)))
        )
        (fp_line (start 8 -12.68) (end -8 -12.68) (layer B.SilkS) (width 0.12))
        (fp_line (start -14 7.68) (end -14 -7.68) (layer B.SilkS) (width 0.12))
        (fp_line (start -8 -7.68) (end -8 -12.68) (layer B.SilkS) (width 0.12))
        (fp_line (start -14 7.68) (end -8 7.68) (layer B.SilkS) (width 0.12))
        (fp_line (start -8 12.68) (end 8 12.68) (layer B.SilkS) (width 0.12))
        (fp_line (start 8 -12.68) (end 8 12.68) (layer B.SilkS) (width 0.12))
        (fp_line (start -8 7.68) (end -8 12.68) (layer B.SilkS) (width 0.12))
        (fp_line (start -14 -7.68) (end -8 -7.68) (layer B.SilkS) (width 0.12))
        (fp_line (start -14 7.68) (end -8 7.68) (layer F.SilkS) (width 0.12))
        (fp_line (start 8 12.68) (end -8 12.68) (layer F.SilkS) (width 0.12))
        (fp_line (start -14.3 -6.88) (end -14.3 6.87) (layer F.CrtYd) (width 0.05))
        (fp_line (start -14.3 6.87) (end -10.7 6.87) (layer F.CrtYd) (width 0.05))
        (fp_line (start -10.7 6.87) (end -10.7 -6.88) (layer F.CrtYd) (width 0.05))
        (fp_line (start -10.7 -6.88) (end -14.3 -6.88) (layer F.CrtYd) (width 0.05))
        (fp_line (start -14 -7.68) (end -14 7.68) (layer F.SilkS) (width 0.12))
        (fp_line (start -8 7.68) (end -8 12.68) (layer F.SilkS) (width 0.12))
        (fp_line (start -14 -7.68) (end -8 -7.68) (layer F.SilkS) (width 0.12))
        (fp_line (start -8 -12.68) (end 8 -12.68) (layer F.SilkS) (width 0.12))
        (fp_line (start -8 -7.68) (end -8 -12.68) (layer F.SilkS) (width 0.12))
        (fp_line (start 8 12.68) (end 8 -12.68) (layer F.SilkS) (width 0.12))
        (pad "" thru_hole circle (at -12.5 -5.08) (size 1.4 1.4) (drill 0.762) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at -12.5 -2.54) (size 1.4 1.4) (drill 0.762) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at -12.5 0) (size 1.4 1.4) (drill 0.762) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at -12.5 2.54) (size 1.4 1.4) (drill 0.762) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at -12.5 5.08) (size 1.4 1.4) (drill 0.762) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at 5.45 -9.8 180) (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at -5.45 -9.8 180) (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask))
        (pad 3 smd custom (at -13.8565 0.0015 ${p.rot}) (size 0.8 1.5) (layers F.Cu F.Mask)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.56 0.67) (xy 0.34 0.67) (xy 0.34 0.3)) (width 0.1))
            (gr_line (start 0.67 -0.697) (end -0.35 -0.697) (width 0.12))
            (gr_poly (pts
               (xy 0.54 -0.67) (xy 0.32 -0.67) (xy 0.32 -0.3)) (width 0.1))
            (gr_line (start -0.35 -0.697) (end -0.35 0.69) (width 0.12))
            (gr_arc (start 1.26 0) (end 0.67 -0.697) (angle -98.7) (width 0.12))
            (gr_line (start -0.35 0.69) (end 0.66 0.69) (width 0.12))
          ) ${p.SCL})
        (pad 3 smd custom (at -13.858 -0.007 ${p.rot}) (size 0.8 1.5) (layers B.Cu B.Mask)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.56 -0.67) (xy 0.34 -0.67) (xy 0.34 -0.3)) (width 0.1))
            (gr_line (start 0.67 0.697) (end -0.35 0.697) (width 0.12))
            (gr_poly (pts
               (xy 0.54 0.67) (xy 0.32 0.67) (xy 0.32 0.3)) (width 0.1))
            (gr_line (start -0.35 0.697) (end -0.35 -0.69) (width 0.12))
            (gr_arc (start 1.26 0) (end 0.67 0.697) (angle 98.7) (width 0.12))
            (gr_line (start -0.35 -0.69) (end 0.66 -0.69) (width 0.12))
          ) ${p.SCL})
        (pad 2 smd custom (at -13.8565 2.5415 ${p.rot}) (size 0.8 1.5) (layers F.Cu F.Mask)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.56 0.67) (xy 0.34 0.67) (xy 0.34 0.3)) (width 0.1))
            (gr_line (start 0.67 -0.697) (end -0.35 -0.697) (width 0.12))
            (gr_poly (pts
               (xy 0.54 -0.67) (xy 0.32 -0.67) (xy 0.32 -0.3)) (width 0.1))
            (gr_line (start -0.35 -0.697) (end -0.35 0.69) (width 0.12))
            (gr_arc (start 1.26 0) (end 0.67 -0.697) (angle -98.7) (width 0.12))
            (gr_line (start -0.35 0.69) (end 0.66 0.69) (width 0.12))
          ) ${p.SDA})
        (pad "" smd custom (at -13.858 2.533 ${p.rot}) (size 0.8 1.5) (layers B.Cu B.Mask)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.56 -0.67) (xy 0.34 -0.67) (xy 0.34 -0.3)) (width 0.1))
            (gr_line (start 0.67 0.697) (end -0.35 0.697) (width 0.12))
            (gr_poly (pts
               (xy 0.54 0.67) (xy 0.32 0.67) (xy 0.32 0.3)) (width 0.1))
            (gr_line (start -0.35 0.697) (end -0.35 -0.69) (width 0.12))
            (gr_arc (start 1.26 0) (end 0.67 0.697) (angle 98.7) (width 0.12))
            (gr_line (start -0.35 -0.69) (end 0.66 -0.69) (width 0.12))
          ))
        (pad 1 smd custom (at -13.8565 5.0815 ${p.rot}) (size 0.8 1.5) (layers F.Cu F.Mask)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.56 0.67) (xy 0.34 0.67) (xy 0.34 0.3)) (width 0.1))
            (gr_line (start 0.67 -0.697) (end -0.35 -0.697) (width 0.12))
            (gr_poly (pts
               (xy 0.54 -0.67) (xy 0.32 -0.67) (xy 0.32 -0.3)) (width 0.1))
            (gr_line (start -0.35 -0.697) (end -0.35 0.69) (width 0.12))
            (gr_arc (start 1.26 0) (end 0.67 -0.697) (angle -98.7) (width 0.12))
            (gr_line (start -0.35 0.69) (end 0.66 0.69) (width 0.12))
          ) ${p.VCC})
        (pad 5 smd custom (at -13.858 5.073 ${p.rot}) (size 0.8 1.5) (layers B.Cu B.Mask)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.56 -0.67) (xy 0.34 -0.67) (xy 0.34 -0.3)) (width 0.1))
            (gr_line (start 0.67 0.697) (end -0.35 0.697) (width 0.12))
            (gr_poly (pts
               (xy 0.54 0.67) (xy 0.32 0.67) (xy 0.32 0.3)) (width 0.1))
            (gr_line (start -0.35 0.697) (end -0.35 -0.69) (width 0.12))
            (gr_arc (start 1.26 0) (end 0.67 0.697) (angle 98.7) (width 0.12))
            (gr_line (start -0.35 -0.69) (end 0.66 -0.69) (width 0.12))
          ) ${p.GND})
        (pad "" smd custom (at -13.8565 -2.5385 ${p.rot}) (size 0.8 1.5) (layers F.Cu F.Mask)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.56 0.67) (xy 0.34 0.67) (xy 0.34 0.3)) (width 0.1))
            (gr_line (start 0.67 -0.697) (end -0.35 -0.697) (width 0.12))
            (gr_poly (pts
               (xy 0.54 -0.67) (xy 0.32 -0.67) (xy 0.32 -0.3)) (width 0.1))
            (gr_line (start -0.35 -0.697) (end -0.35 0.69) (width 0.12))
            (gr_arc (start 1.26 0) (end 0.67 -0.697) (angle -98.7) (width 0.12))
            (gr_line (start -0.35 0.69) (end 0.66 0.69) (width 0.12))
          ))
        (pad 2 smd custom (at -13.858 -2.547 ${p.rot}) (size 0.8 1.5) (layers B.Cu B.Mask)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.56 -0.67) (xy 0.34 -0.67) (xy 0.34 -0.3)) (width 0.1))
            (gr_line (start 0.67 0.697) (end -0.35 0.697) (width 0.12))
            (gr_poly (pts
               (xy 0.54 0.67) (xy 0.32 0.67) (xy 0.32 0.3)) (width 0.1))
            (gr_line (start -0.35 0.697) (end -0.35 -0.69) (width 0.12))
            (gr_arc (start 1.26 0) (end 0.67 0.697) (angle 98.7) (width 0.12))
            (gr_line (start -0.35 -0.69) (end 0.66 -0.69) (width 0.12))
          ) ${p.SDA})
        (pad 5 smd custom (at -13.8565 -5.0785 ${p.rot}) (size 0.8 1.5) (layers F.Cu F.Mask)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.56 0.67) (xy 0.34 0.67) (xy 0.34 0.3)) (width 0.1))
            (gr_line (start 0.67 -0.697) (end -0.35 -0.697) (width 0.12))
            (gr_poly (pts
               (xy 0.54 -0.67) (xy 0.32 -0.67) (xy 0.32 -0.3)) (width 0.1))
            (gr_line (start -0.35 -0.697) (end -0.35 0.69) (width 0.12))
            (gr_arc (start 1.26 0) (end 0.67 -0.697) (angle -98.7) (width 0.12))
            (gr_line (start -0.35 0.69) (end 0.66 0.69) (width 0.12))
          ) ${p.GND})
        (pad 1 smd custom (at -13.858 -5.087 ${p.rot}) (size 0.8 1.5) (layers B.Cu B.Mask)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.56 -0.67) (xy 0.34 -0.67) (xy 0.34 -0.3)) (width 0.1))
            (gr_line (start 0.67 0.697) (end -0.35 0.697) (width 0.12))
            (gr_poly (pts
               (xy 0.54 0.67) (xy 0.32 0.67) (xy 0.32 0.3)) (width 0.1))
            (gr_line (start -0.35 0.697) (end -0.35 -0.69) (width 0.12))
            (gr_arc (start 1.26 0) (end 0.67 0.697) (angle 98.7) (width 0.12))
            (gr_line (start -0.35 -0.69) (end 0.66 -0.69) (width 0.12))
          ) ${p.VCC})
        (pad "" thru_hole circle (at -5.45 9.8) (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at 5.45 9.8) (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask))
      )
    `
  }
}
