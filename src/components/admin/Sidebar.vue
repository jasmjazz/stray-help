<template>
  <div>
    <nav class="col-md-2 d-none d-md-block sidebar">
      <div class="sidebar-sticky">
        <h5 class="d-flex justify-content-between
          align-items-center px-3 mt-2 mb-3 text-muted">
          <span>Admin</span>
        </h5>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link class="nav-link" to='/admin/products'>
              <i class="fas fa-box-open"></i>
              糧食列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to='/admin/orders'>
              <i class="far fa-list-alt"></i>
              訂單列表
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
