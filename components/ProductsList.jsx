import { GoHeart } from "react-icons/go";

export default function ProductList() {
  return (
    <div class="bg-white">
      <div class="w-full py-8 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl text-center pb-4 font-bold text-gray-900">WHAT'S HOT</h2>
        <div class="mt-6 grid grid-cols-2 gap-4 mx-5 lg:grid-cols-4">

          {/* product entry */}
          <div className="card bg-base-100 w-full shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="card-title justify-between">
                <div>Card Title 
                  <span className="badge badge-xs badge-secondary ml-1">NEW</span>
                </div>
                <div>
                  <GoHeart style={{ fontSize: "30px" }}/>
                </div>
              </div>
              <span className="card-category text-gray-600 text-sm text-bold tracking-tight">Card Category</span>
              <p className="leading-relaxed">A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions flex-col gap-0">
                <span className="text-lg font-bold tracking-tight text-red-500">₱ 1,000</span>
                <span className="text-gray-600 justify-end"> ₱ 2,000 Original Price 
                  <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-semibold text-red-500 ml-2">50% OFF</span>
                </span>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="card-title justify-between">
                <div>Card Title 
                  <span className="badge badge-xs badge-secondary ml-1">NEW</span>
                </div>
                <div>
                  <GoHeart style={{ fontSize: "30px" }}/>
                </div>
              </div>
              <p className="leading-relaxed">A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions flex-col gap-0">
                <span className="text-lg font-bold tracking-tight text-red-500">₱ 1,000</span>
                <span className="text-gray-600 justify-end"> ₱ 2,000 Original Price 
                  <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-semibold text-red-500 ml-2">50% OFF</span>
                </span>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="card-title justify-between">
                <div>Card Title 
                  <span className="badge badge-xs badge-secondary ml-1">NEW</span>
                </div>
                <div>
                  <GoHeart style={{ fontSize: "30px" }}/>
                </div>
              </div>
              <span className="card-category text-gray-600 text-sm text-bold tracking-tight">Card Category</span>
              <p className="leading-relaxed">A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions flex-col gap-0">
                <span className="text-lg font-bold tracking-tight text-red-500">₱ 1,000</span>
                <span className="text-gray-600 justify-end"> ₱ 2,000 Original Price 
                  <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-semibold text-red-500 ml-2">50% OFF</span>
                </span>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="card-title justify-between">
                <div>Card Title 
                  <span className="badge badge-xs badge-secondary ml-1">NEW</span>
                </div>
                <div>
                  <GoHeart style={{ fontSize: "30px" }}/>
                </div>
              </div>
              <p className="leading-relaxed">A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions flex-col gap-0">
                <span className="text-lg font-bold tracking-tight text-red-500">₱ 1,000</span>
                <span className="text-gray-600 justify-end"> ₱ 2,000 Original Price 
                  <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-semibold text-red-500 ml-2">50% OFF</span>
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

// * heart icon should only appear when user is logged in (for future arrangements)

