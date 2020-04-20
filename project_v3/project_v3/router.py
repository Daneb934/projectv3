
from api.viewsets import CategoryViewSet, ProductViewSet, CommentViewSet, PersonViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('categories', CategoryViewSet)
router.register('products', ProductViewSet)
router.register('comment', CommentViewSet)
router.register('users', PersonViewSet)
