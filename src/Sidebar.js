import React from 'react'
import Dashboard from './dashboard'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar/">

                      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

                      <hr class="sidebar-divider my-0"/>

           
            <li class="nav-item active">
                <Link class="nav-link" to={'./dashboard'}>
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

           
            <hr class="sidebar-divider"/>

            
            <div class="sidebar-heading">
                Interface
            </div>

           
                  
            <li class="nav-item">
                <Link class="nav-link" to={'./student'}>
             
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Student</span></Link>
            </li>

           
            <li class="nav-item">
                <Link class="nav-link" to={'/teacher'}>
                    <i class="fas fa-fw fa-table"></i>
                    <span>Teacher</span></Link>
            </li>

           
            <hr class="sidebar-divider d-none d-md-block"/>
        
                       
            <div class="sidebar-card d-none d-lg-flex">
                <img class="sidebar-card-illustration mb-2" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhMQEhISEhMVFRAVGRUVEhAQExITFRIXGBUTFRcYHiggGBslGxYVITEhJikrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0tKy0tLS0tNS8tLS0tKystLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLf/AABEIANoA6AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADkQAAIBAgMGAwYFBAEFAAAAAAABAgMRBCExBRJBUWFxgZGxIjJSocHRBhNC4fBicpKi8RQjssLS/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EACERAQEBAQABBAMBAQAAAAAAAAABAhEDBBIhMRNBUTKB/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwqVFFXk0l1divxG2IrKCcuryX3JmbfpFsizNNbFQj70kumr8kUNfH1JaysuS9lEKVVdzWeL+qXa+q7Zivdi339lEOrtao9LR7K/qVTrPga3JviaTxSK3dWVOtKc4xc27yStd888j08/D9G9Xe4RTfi8l9fIGfkvLyL4nZ8umABiuAAAAAAAAAAAAAAAAAAAAAAPGzRUxHLzJ4N8pJakepiOWXU0SlzMHItMq9U2Iqu7322+uZHlW5EjatG0t7hL1IR1Z5xjXrk3qeAFkABnSpuUlFatpeYHQ/h6ham5cZv5LJfXzBZUqajFRWiSXkDi1e3rok5GYAKpAAAAAAAAAAAAAAAAADxsD011KyXVmqrX4LzI7ZaZR1nOo3qa3I0VcTGPvSS6cfI1f9fT+L5S+xpM1XqUeGFOrGXutPszMDXiKKnFxf/D4MoalNxbi9UdERsbhFNXWUlo+fRl8a4rqdUgPZxadmrNHhszC3/DuGvJ1HpHJf3P8Ab1KmKu7LNvLuzsMBhvy4RhxWvVvUy8uuTi+J2pAAOVsAAAAAAAAAAAAAAAAAGurVt3AynNLUiVKjfYxnO+bNbZeRXpKZT4zHt5Rdlz4v7I37Wr2SguOb7cv5yOc2njNxbsfefHkuZ0+Hxe6s96424vaFOn780nyzcvJENfiCjzkuu7kUk9y7b3b8b2bZreIprRX7RSPUz6THPnrmvkrr8Ji4T9qnNO3J2a78UXOBx93uz14Pn0Z82htFxd4Kz53Op2VjlWhvaSWUlyfTozm9R6W4nf00x5OuwBG2fX3oZ6rJ/Rkk86zjojTicLGaz14PiipxGElDVXXNaePIvDKMbuyLTdiLnqv/AA/hN6X5j0jp1l+y9UdGYUaSit1JJdMu7MzHevder5nIAAqkAAAAAADGc0ldtJc3kBkCsxG2IL3VvdX7KK6ttub0aXZfc0nj1VbuR0gOSntKo/1S/wAmvQ1vGz+J/wCUvuW/DVfyR2IOPWPqfFL/ACl9yw2bia03vbzUFxdnvPkrrTqRfFYmb6u61W2XH0IkpcWeSZg2RIkbPACwpNpSvUl0svkcbtempVZuUms7WurK2X0Oz2nC1R9Un8rfQ4Lb1Ddrz5StJdb6/O56nof9f8cnmaXRp/H6P0NNWMf0tvwsawerI5wuvwrVtUlHhKN/GLVvVlKXv4UoNznU4KO74tp+i+Zj6nn4tdWx/qO22PLOS6J+T/ctCs2PHOT7Isz57f278/QTcJSst56v0NGGpXfRfyxPMtX9LwABRIAAAAAAGFaqoxcnogNWMxapq7zb0XFnNY3HSm83f0XZHmPxTnJt8fkuCIh1ePx8+2OtdetngBqoAG/BYV1JW0ivef8A6rr6C3iYzwGDdR3eUFq/ifwr6svUklZKyWSS4CEVFJJWSySMWzn1r3VpJwbPACFgAAQ9p4fejvLWPzXE5jbGzlWjllON918Oz6HZlfjNn39qGvLh4G3i8txexnvHXy3EUJQe7OLi+vHtzNR9CxGH/TOKfSSTXzIq2ZR1/Kh5K3kern1058xy3w1yGBwM6rtBZcZP3Y939Ds8Bg1Tgqcc/WUnxJWHw7eUI5dFZL6ItsFglDN5y+S7HH6j1V38fr+NfH4uNuDobkUuOr7kmnBt2RjFXyRYUaW6uvE8/WnTIyhBJWRkAZLAAAAAAAABz22cfvPdj7q/2fPsTtsY3dW4nm9XyX3Zzc5XN/Fj91nvX6YgA6GQDP8AKlruy8mYRTbSSu27Jc2Bsw9FzkoR14vhFc2dDQoqEVGOi831fU1YHCqnG2recnzf2Nsmc+9e6tczg2eAELAAAAAAAADRgqMfhj5IzAQHqQSJuHoWzevoRbxL3D0d3N6+nQ3AGSwAAAAAAAARcfi1Tjf9T0X1fQ24muoRcn/y+SOWx2Kc5NvX0XJGnjx7qrrXGnEVXJtt3435sYfDym92EXJ+nd8Cy2fsVy9qpeMfh/U+/IvqNGMFuxSS6GuvLM/EZzFv2qMJsFa1JX/pjkvF6+ha0MLCHuxiuyz8zcDDW7ftrMyBBrxi5byit5XW9ZXz1zMNr4zdW5F+0/kjVRrb0U+PHuTM3nUW/pnJmIBYAASAAAAAAAAB7FXyRlTg27InUaKj35lbeHGNChu58fQ3AGawAAAAAAAAAAOb2jVqTqblnvaKPJc/3LLZuyY07Sl7U/lHt9yw3Fe9le1r2ztyuZGl8nxyKzPz0ABmsGFapuxctbJ5c+hmRcVLOxMK52vWbbnLV/yw2dibSs9JfJ8DzadLdl/S819UQzskljDvK6QEPZ2K3luv3l81zJhhZxpL0AASAAAAeSkkrtpJcXkkB6RMZjlDJe1PlwXWT4EXF7Sbyp5L4uL/ALVw7kBI0zj+qXX8djgHenB5XcYt2yzaVyQaMAv+1T/sh/4o3nNftpAAEJAAAAAAAAAAAAAAAADRi45X/mZvPJRumiYKbFUFOLi/B8mUM4tNp5NHSzRA2jhN5b0feX+y+50Y1z4ZaiphJpprJousFi1NW0ktVz6opD2MmndZM01nqkvHRggYTaKeU8nz4PvyJ5jZY1l6Awr1lCO9LTTRvPkVOJ2hKWUfYj/s/Hh4eYmbUW8T8Xj4wy96Xwrh3fAqcRXlN3k+yXur7vqakj02ziRS66AG/A096pCPOS8k7v5Jlr8KuwpRskuSS8kZAHA6QAAAAAAAAAAAAAAAAAAAABExlP8AVz1IpaSjdWZBq4drTNF81WxV47A73tRylxXB/uVUotOzVmdPGhJ8H45G17OhL30pfznqazy8+1bjrl8Ph5TdoRcvRd3wOg2bsyUF7c7/ANK91eP2sWVOmoq0UkuSVkZFN+W34TnHEPalNOjNcot+Wf0OSOq23V3aMucrRXjr8rnKmnh+lfJ9gANmYW34coXm58Iq3i/2v5lSddsvC/l01F6vN93w8Ml4Gfl1zK+J2pYAORsAAAAAAAAAAAAAAAAAAAAAAAAAAAAQNr478uGXvyyXTnImTt5EW8VO38XvT3FpD5y4+WnmVYB25nJxhb2gPYRbdkm2+CV2XeztiaSq/wCH/wBP6Ea1M/ZJa17C2fdqrJZL3VzfxdkdCeJHpya1dXreTkAAVSAAAAAAAAAAAAAAAAAAAAAAAAAGvEV4wi5Sdkv5ZAY4vExpxc5eXFvgkcjisRKpJzlq/JLgkbdoY2VWV3klouS+57gdnTq6K0fienhzOrGZidrHV915EQtcFsWcs5+xHl+p+HDxLfA7NhTzSvL4nr4ciaU15v4tMf1owuEhTVoRS66t92bwDC3rQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeSfj05nKY7FTrTtZ6tKC1XfqdYRqFNKpUaSv7OdlfQ0xr2/Kup1XbP2IlaVXN/DwXfn/NS5Stkj0FdauvtMkgACqQAAAAAAAAAAAAAAAAAAAAB/9k=" alt="..."/>
                <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>

        </ul>
  )
}

export default Sidebar