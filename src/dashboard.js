import React from 'react'

function Dashboard(props) {
    const dasharr=[
        {
          primary:true,
          earnings:"Earnings (Monthly)",
          primaryfont:true,
          price:"$40,000",
          calendar:true
        },
        {
         success:true,
          earnings:"Earnings (Annual)",
          successfont:true,
          price:"$2,15,000",
          dollar:true
        },
        {
            info:true,
             earnings:"Tasks",
             infofont:true,
             price:"50%",
             progressbar:true,
             Clipboard:true
           },
           {
            warning:true,
             earnings:"pending requests",
             warningfont:true,
             price:"18",
             comment:true
           },
      ]
  return (
  <>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href=" " class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                    <div class="row">
                        {
                            dasharr.map((e)=>
                            {
                                return(
                                    <div class="col-xl-3 col-md-6 mb-4">
                                    <div class={e.primary?"card border-left-primary shadow h-100 py-2"
                                    :e.success?"card border-left-success shadow h-100 py-2"
                                    :e.info?"card border-left-info shadow h-100 py-2"
                                    :e.warning?"card border-left-warning shadow h-100 py-2":""}>                          
                                    
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class={e.primaryfont?"text-xs font-weight-bold text-primary text-uppercase mb-1"
                                                    :e.successfont?"text-xs font-weight-bold text-success text-uppercase mb-1"
                                                :e.infofont?"text-xs font-weight-bold text-info text-uppercase mb-1"
                                            :e.warningfont?"text-xs font-weight-bold text-warning text-uppercase mb-1":""}>
                                                        {e.earnings}</div>
                                                    <div class="h5 mb-0 font-weight-bold text-gray-800">{e.price}</div>
                                                </div>
                                                {e.progressbar?
                                               <div class="col">
                                               <div class="progress progress-sm mr-2">
                                                   <div class="progress-bar bg-info" role="progressbar"
                                                       style={{width:"50%"}} aria-valuenow="50" aria-valuemin="0"
                                                       aria-valuemax="100"></div>
                                               </div>
                                           </div>:""}
                                                <div class="col-auto">
                                                    <i class={e.calendar?"fas fa-calendar fa-2x text-gray-300":
                                                    e.dollar?"fas fa-dollar-sign fa-2x text-gray-300":
                                                    e.Clipboard?"fas fa-clipboard-list fa-2x text-gray-300":
                                                    e.comment?"fas fa-comments fa-2x text-gray-300":""}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                )
                            })
                        }

                                          
                        </div>
  </>
  );
}

export default Dashboard;
