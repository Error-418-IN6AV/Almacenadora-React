import React from 'react'

export const ArrendamientoPage = () => {
  return (
    <>
      <section className="vh-100" style={{backgroudcolor: '#2779e2'}}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-9">
              <div className="card" style={{borderradius: '15px'}}>
                <div className="card-body">
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Cliente</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input type="text" className="form-control form-control-lg" />
                    </div>
                  </div>


                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Bodega</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input type="email" className="form-control form-control-lg"/>
                    </div>
                  </div>


                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Servicios</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                    <input type="email" className="form-control form-control-lg"/>
                    </div>
                  </div>


                  <div className="px-5 py-4">
                    <button type="submit" className="btn btn-primary btn-lg">Send</button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
