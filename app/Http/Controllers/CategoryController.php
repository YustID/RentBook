<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;


class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return inertia('Views/Category', ['categories' => $categories]);
    }

    public function add()
    {
        return inertia('Views/AddCategory');
    }
    
    public function Store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|unique:categories|max:100'
          ]);

        $category = Category::create($request->all());

        return redirect('categories')->with([
            'message' => 'Category Added Successfuly',
            'type' => 'success'
        ]);
    }

    public function edit(Category $category)
    {
        return inertia('Views/EditCategory', [
            'category' => $category,
            
        ]);
    }

    public function update(Request $request, Category $category)
    {
        $this->validate($request, [
            'name' => 'required|unique:categories|max:100'
          ]);
        
          $category->update([
            'name' => $request->name,
            'slug' => $request->slug
          ]);
          return redirect('categories')->with([
            'message' => 'Category Update Successfuly',
            'type' => 'success'
        ]);

        
    }

    public function destroy(Category $category)
    {
        $category->delete();
        return redirect()->route('categories');
    }

    public function deletedCategory()
    {
        $deletedCategories = Category::onlyTrashed()->get();
        return inertia('Views/DeletedListCategory', ['deletedCategories' => $deletedCategories]);
    }

    public function restoreCategory($id)
    {
        $categorySelect = Category::withTrashed()->find($id);
        $categorySelect->restore();
        return redirect('categories')->with([
            'message' => 'Category Restored Successfuly',
            'type' => 'success'
        ]);

    }
}
