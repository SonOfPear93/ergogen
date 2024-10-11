module.exports = {
    params: {
        designator: 'D',
        rows: [
            {
                to: {type:'net', value: 'P3' },
                columns: [ {type:'net', value: 'P3' } ]
            }
        ],
        foo: {type:'net', value: 'P024' },
        bar: {type:'net', value: 'P002' }
    },
    body: p => {
        const standard = `
        (module ComboDiode (layer F.Cu) (tedit 5B24D78E)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))`;

        function drawColumn(columnPin, rowPin, xCoord, yCoord) {
            return `
                (pad 1 smd rect (at ` + xCoord + ` ` + (yCoord-1.65) + `) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.foo})
                (pad 2 smd rect (at ` + xCoord + ` ` + (yCoord+1.65) + `) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.bar})
            `;
        }

        function drawRow(row, xCoord) {
            let diodeRow = '';

            for (let i = 0; i < row.columns.length; i++)
            {
                let yCoord = i * 6;

                diodeRow = diodeRow + ' ' + drawColumn(row.columns[i], row.to, xCoord, yCoord);
            }

            return diodeRow;
        }

        function drawGrid()
        {
            let grid = '';

            for (let i = 0; i < p.rows.length; i++)
            {
                let xCoord = i * 2;

                grid = grid + ' ' + drawRow(p.rows[i], xCoord);
            }

            return grid;
        }

        return `${standard}
                ${drawGrid()})`;
    }
}