import HeaderAdmin from "@/components/header-admin";
import NavAdmin from "@/components/nav-admin";

const CategoriesAdd = () => {
  return /*html*/ `
    <div class="container-admin h-screen w-screen bg-gray-100 flex flex-col">
    ${HeaderAdmin()}
    <div class="flex grow">
        ${NavAdmin()}
        <!-- End Navbar -->
        <div class="grow p-6">
            <div class="bg-white h-full">
                <div class="p-5 max-w-md mx-auto">
                    <h3 class="font-medium text-green-500 text-2xl text-center mb-4">Thêm mới danh mục</h3>
                    <form>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="mail@gmail.com" required>
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                        </div>
                        <button type="submit" class="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                    </form>
                </div>

            </div>
        </div>


    </div>
    
</div>
    `;
};

export default CategoriesAdd;