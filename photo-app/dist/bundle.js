(()=>{"use strict";var e={987:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Album=void 0;const i=r(123);class o extends i.Item{constructor(e,t){super(e,t),this.pictures=[]}addPicture(e){this.pictures.push(e)}}t.Album=o},123:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Item=void 0,t.Item=class{constructor(e,t){this.id=e,this.title=t}}},945:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.PhotoOrientation=void 0,(r=t.PhotoOrientation||(t.PhotoOrientation={}))[r.Landscape=0]="Landscape",r[r.Portrait=1]="Portrait",r[r.Square=2]="Square",r[r.Panorama=3]="Panorama"},449:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Picture=void 0;const i=r(123);class o extends i.Item{constructor(e,t,r,i){super(e,t),this._date=r,this._orientation=i}toString(){return`[id: ${this.id},\n                 title: ${this.title},\n                 orientation: ${this._orientation}]`}}t.Picture=o},536:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.User=void 0,t.User=class{constructor(e,t,r,i){this.id=e,this.username=t,this.firstName=r,this.isPro=i,this.album=[]}addAlbum(e){this.album.push(e)}removeAlbum(e){const t=this.album.findIndex((t=>t.id===e.id));let r;return t>=0&&(r=this.album[t],this.album.splice(t,1)),r}}}},t={};function r(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,r),s.exports}(()=>{const e=r(987),t=r(945),i=r(449),o=new(r(536).User)(1,"Pedroquintero0191","Pedro",!0),s=new e.Album(10,"Platzi Album"),n=new i.Picture(1,"Foto","2020-08",t.PhotoOrientation.Landscape);o.addAlbum(s),s.addPicture(n),console.log("user",o),o.removeAlbum(s),console.log("user",o)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waG90by1hcHAvLi9zcmMvYWxidW0udHMiLCJ3ZWJwYWNrOi8vcGhvdG8tYXBwLy4vc3JjL2l0ZW0udHMiLCJ3ZWJwYWNrOi8vcGhvdG8tYXBwLy4vc3JjL3Bob3RvLW9yaWVudGF0aW9uLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC8uL3NyYy9waWN0dXJlLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC8uL3NyYy91c2VyLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waG90by1hcHAvLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkFsYnVtIiwiaXRlbV8xIiwiSXRlbSIsImlkIiwidGl0bGUiLCJzdXBlciIsInRoaXMiLCJwaWN0dXJlcyIsInBpY3R1cmUiLCJwdXNoIiwiUGhvdG9PcmllbnRhdGlvbiIsIlBpY3R1cmUiLCJfZGF0ZSIsIl9vcmllbnRhdGlvbiIsIlVzZXIiLCJ1c2VybmFtZSIsImZpcnN0TmFtZSIsImlzUHJvIiwiYWxidW0iLCJpbmRleCIsImZpbmRJbmRleCIsImEiLCJkZWxldGVkQWxidW0iLCJzcGxpY2UiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiYWxidW1fMSIsInBob3RvX29yaWVudGF0aW9uXzEiLCJwaWN0dXJlXzEiLCJ1c2VyIiwiTGFuZHNjYXBlIiwiYWRkQWxidW0iLCJhZGRQaWN0dXJlIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUFsYnVtIl0sIm1hcHBpbmdzIjoid0NBQ0FBLE9BQU9DLGVBQWVDLEVBQVMsYUFBYyxDQUFFQyxPQUFPLElBQ3RERCxFQUFRRSxXQUFRLEVBQ2hCLE1BQU1DLEVBQVMsRUFBUSxLQUN2QixNQUFNRCxVQUFjQyxFQUFPQyxLQUN2QixZQUFZQyxFQUFJQyxHQUNaQyxNQUFNRixFQUFJQyxHQUNWRSxLQUFLQyxTQUFXLEdBRXBCLFdBQVdDLEdBQ1BGLEtBQUtDLFNBQVNFLEtBQUtELElBRzNCVixFQUFRRSxNQUFRQSxHLFlDWmhCSixPQUFPQyxlQUFlQyxFQUFTLGFBQWMsQ0FBRUMsT0FBTyxJQUN0REQsRUFBUUksVUFBTyxFQU9mSixFQUFRSSxLQU5SLE1BQ0ksWUFBWUMsRUFBSUMsR0FDWkUsS0FBS0gsR0FBS0EsRUFDVkcsS0FBS0YsTUFBUUEsSyxZQ0ZyQixJQUFXTSxFQUhYZCxPQUFPQyxlQUFlQyxFQUFTLGFBQWMsQ0FBRUMsT0FBTyxJQUN0REQsRUFBUVksc0JBQW1CLEdBRWhCQSxFQUtXWixFQUFRWSxtQkFBcUJaLEVBQVFZLGlCQUFtQixLQUp6REEsRUFBNEIsVUFBSSxHQUFLLFlBQ3REQSxFQUFpQkEsRUFBMkIsU0FBSSxHQUFLLFdBQ3JEQSxFQUFpQkEsRUFBeUIsT0FBSSxHQUFLLFNBQ25EQSxFQUFpQkEsRUFBMkIsU0FBSSxHQUFLLFksY0NQekRkLE9BQU9DLGVBQWVDLEVBQVMsYUFBYyxDQUFFQyxPQUFPLElBQ3RERCxFQUFRYSxhQUFVLEVBQ2xCLE1BQU1WLEVBQVMsRUFBUSxLQUN2QixNQUFNVSxVQUFnQlYsRUFBT0MsS0FDekIsWUFBWUMsRUFBSUMsRUFBT1EsRUFBT0MsR0FDMUJSLE1BQU1GLEVBQUlDLEdBQ1ZFLEtBQUtNLE1BQVFBLEVBQ2JOLEtBQUtPLGFBQWVBLEVBRXhCLFdBQ0ksTUFBTyxRQUFRUCxLQUFLSCxnQ0FDRkcsS0FBS0YseUNBQ0NFLEtBQUtPLGlCQUdyQ2YsRUFBUWEsUUFBVUEsRyxZQ2ZsQmYsT0FBT0MsZUFBZUMsRUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdERELEVBQVFnQixVQUFPLEVBdUJmaEIsRUFBUWdCLEtBdEJSLE1BQ0ksWUFBWVgsRUFBSVksRUFBVUMsRUFBV0MsR0FDakNYLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtTLFNBQVdBLEVBQ2hCVCxLQUFLVSxVQUFZQSxFQUNqQlYsS0FBS1csTUFBUUEsRUFDYlgsS0FBS1ksTUFBUSxHQUVqQixTQUFTQSxHQUNMWixLQUFLWSxNQUFNVCxLQUFLUyxHQUVwQixZQUFZQSxHQUVSLE1BQU1DLEVBQVFiLEtBQUtZLE1BQU1FLFdBQVVDLEdBQUtBLEVBQUVsQixLQUFPZSxFQUFNZixLQUN2RCxJQUFJbUIsRUFLSixPQUpJSCxHQUFTLElBQ1RHLEVBQWVoQixLQUFLWSxNQUFNQyxHQUMxQmIsS0FBS1ksTUFBTUssT0FBT0osRUFBTyxJQUV0QkcsTUNyQlhFLEVBQTJCLEdBRy9CLFNBQVNDLEVBQW9CQyxHQUU1QixJQUFJQyxFQUFlSCxFQUF5QkUsR0FDNUMsUUFBcUJFLElBQWpCRCxFQUNILE9BQU9BLEVBQWE3QixRQUdyQixJQUFJK0IsRUFBU0wsRUFBeUJFLEdBQVksQ0FHakQ1QixRQUFTLElBT1YsT0FIQWdDLEVBQW9CSixHQUFVRyxFQUFRQSxFQUFPL0IsUUFBUzJCLEdBRy9DSSxFQUFPL0IsUSxNQ2xCZixNQUFNaUMsRUFBVSxFQUFRLEtBQ2xCQyxFQUFzQixFQUFRLEtBQzlCQyxFQUFZLEVBQVEsS0FFcEJDLEVBQU8sSUFERSxFQUFRLEtBQ0NwQixNQUFLLEVBQUcsb0JBQXFCLFNBQVMsR0FDeERJLEVBQVEsSUFBSWEsRUFBUS9CLE1BQU0sR0FBSSxnQkFDOUJRLEVBQVUsSUFBSXlCLEVBQVV0QixRQUFRLEVBQUcsT0FBUSxVQUFXcUIsRUFBb0J0QixpQkFBaUJ5QixXQUVqR0QsRUFBS0UsU0FBU2xCLEdBQ2RBLEVBQU1tQixXQUFXN0IsR0FDakI4QixRQUFRQyxJQUFJLE9BQVFMLEdBRXBCQSxFQUFLTSxZQUFZdEIsR0FDakJvQixRQUFRQyxJQUFJLE9BQVFMLEkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFsYnVtID0gdm9pZCAwO1xuY29uc3QgaXRlbV8xID0gcmVxdWlyZShcIi4vaXRlbVwiKTtcbmNsYXNzIEFsYnVtIGV4dGVuZHMgaXRlbV8xLkl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSkge1xuICAgICAgICBzdXBlcihpZCwgdGl0bGUpO1xuICAgICAgICB0aGlzLnBpY3R1cmVzID0gW107XG4gICAgfVxuICAgIGFkZFBpY3R1cmUocGljdHVyZSkge1xuICAgICAgICB0aGlzLnBpY3R1cmVzLnB1c2gocGljdHVyZSk7XG4gICAgfVxufVxuZXhwb3J0cy5BbGJ1bSA9IEFsYnVtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkl0ZW0gPSB2b2lkIDA7XG5jbGFzcyBJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgfVxufVxuZXhwb3J0cy5JdGVtID0gSXRlbTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QaG90b09yaWVudGF0aW9uID0gdm9pZCAwO1xudmFyIFBob3RvT3JpZW50YXRpb247XG4oZnVuY3Rpb24gKFBob3RvT3JpZW50YXRpb24pIHtcbiAgICBQaG90b09yaWVudGF0aW9uW1Bob3RvT3JpZW50YXRpb25bXCJMYW5kc2NhcGVcIl0gPSAwXSA9IFwiTGFuZHNjYXBlXCI7XG4gICAgUGhvdG9PcmllbnRhdGlvbltQaG90b09yaWVudGF0aW9uW1wiUG9ydHJhaXRcIl0gPSAxXSA9IFwiUG9ydHJhaXRcIjtcbiAgICBQaG90b09yaWVudGF0aW9uW1Bob3RvT3JpZW50YXRpb25bXCJTcXVhcmVcIl0gPSAyXSA9IFwiU3F1YXJlXCI7XG4gICAgUGhvdG9PcmllbnRhdGlvbltQaG90b09yaWVudGF0aW9uW1wiUGFub3JhbWFcIl0gPSAzXSA9IFwiUGFub3JhbWFcIjtcbn0pKFBob3RvT3JpZW50YXRpb24gPSBleHBvcnRzLlBob3RvT3JpZW50YXRpb24gfHwgKGV4cG9ydHMuUGhvdG9PcmllbnRhdGlvbiA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGljdHVyZSA9IHZvaWQgMDtcbmNvbnN0IGl0ZW1fMSA9IHJlcXVpcmUoXCIuL2l0ZW1cIik7XG5jbGFzcyBQaWN0dXJlIGV4dGVuZHMgaXRlbV8xLkl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgX2RhdGUsIF9vcmllbnRhdGlvbikge1xuICAgICAgICBzdXBlcihpZCwgdGl0bGUpO1xuICAgICAgICB0aGlzLl9kYXRlID0gX2RhdGU7XG4gICAgICAgIHRoaXMuX29yaWVudGF0aW9uID0gX29yaWVudGF0aW9uO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGBbaWQ6ICR7dGhpcy5pZH0sXG4gICAgICAgICAgICAgICAgIHRpdGxlOiAke3RoaXMudGl0bGV9LFxuICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogJHt0aGlzLl9vcmllbnRhdGlvbn1dYDtcbiAgICB9XG59XG5leHBvcnRzLlBpY3R1cmUgPSBQaWN0dXJlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVzZXIgPSB2b2lkIDA7XG5jbGFzcyBVc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdXNlcm5hbWUsIGZpcnN0TmFtZSwgaXNQcm8pIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuICAgICAgICB0aGlzLmlzUHJvID0gaXNQcm87XG4gICAgICAgIHRoaXMuYWxidW0gPSBbXTtcbiAgICB9XG4gICAgYWRkQWxidW0oYWxidW0pIHtcbiAgICAgICAgdGhpcy5hbGJ1bS5wdXNoKGFsYnVtKTtcbiAgICB9XG4gICAgcmVtb3ZlQWxidW0oYWxidW0pIHtcbiAgICAgICAgLy8gYnVzY2FyIGVsIG9iamV0byBhbGJ1bVxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuYWxidW0uZmluZEluZGV4KGEgPT4gYS5pZCA9PT0gYWxidW0uaWQpO1xuICAgICAgICBsZXQgZGVsZXRlZEFsYnVtO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgZGVsZXRlZEFsYnVtID0gdGhpcy5hbGJ1bVtpbmRleF07XG4gICAgICAgICAgICB0aGlzLmFsYnVtLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlbGV0ZWRBbGJ1bTtcbiAgICB9XG59XG5leHBvcnRzLlVzZXIgPSBVc2VyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gaW1wb3J0IHsgVXNlciwgQWxidW0sIFBpY3R1cmUsIFBob3RvT3JpZW50YXRpb24gfSBmcm9tICcuL3Bob3RvLWFwcCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBhbGJ1bV8xID0gcmVxdWlyZShcIi4vYWxidW1cIik7XG5jb25zdCBwaG90b19vcmllbnRhdGlvbl8xID0gcmVxdWlyZShcIi4vcGhvdG8tb3JpZW50YXRpb25cIik7XG5jb25zdCBwaWN0dXJlXzEgPSByZXF1aXJlKFwiLi9waWN0dXJlXCIpO1xuY29uc3QgdXNlcl8xID0gcmVxdWlyZShcIi4vdXNlclwiKTtcbmNvbnN0IHVzZXIgPSBuZXcgdXNlcl8xLlVzZXIoMSwgJ1BlZHJvcXVpbnRlcm8wMTkxJywgJ1BlZHJvJywgdHJ1ZSk7XG5jb25zdCBhbGJ1bSA9IG5ldyBhbGJ1bV8xLkFsYnVtKDEwLCAnUGxhdHppIEFsYnVtJyk7XG5jb25zdCBwaWN0dXJlID0gbmV3IHBpY3R1cmVfMS5QaWN0dXJlKDEsICdGb3RvJywgJzIwMjAtMDgnLCBwaG90b19vcmllbnRhdGlvbl8xLlBob3RvT3JpZW50YXRpb24uTGFuZHNjYXBlKTtcbi8vIENyZWFtb3MgcmVsYWNpb25lc1xudXNlci5hZGRBbGJ1bShhbGJ1bSk7XG5hbGJ1bS5hZGRQaWN0dXJlKHBpY3R1cmUpO1xuY29uc29sZS5sb2coJ3VzZXInLCB1c2VyKTtcbi8vYm9ycmFtb3MgYWxidW0gZW4gZXN0ZSBwdW50b1xudXNlci5yZW1vdmVBbGJ1bShhbGJ1bSk7XG5jb25zb2xlLmxvZygndXNlcicsIHVzZXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==